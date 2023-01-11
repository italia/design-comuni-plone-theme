/* eslint-disable no-useless-escape */
import { isInternalURL, flattenToAppURL } from '@plone/volto/helpers';

// test against all yt link formats I am aware of, not easy, can't find official docs.
// Try all possible formats, match an alphanumeric token in the expected position, length should be 10-20 chars, that's the ID.
// Reference sheet used and improved with support to shorts: https://gist.github.com/rodrigoborgesdeoliveira/987683cfbfcc8d800192da1e73adc486
const ytReg =
  /^(?:http|https?:)?(?:\/\/)?(?:(?:www\.|m\.)?youtube(?:-nocookie)?\.com\/(?:(?:watch)?\?(?:feature=\w*&)?vi?=|embed\/|vi?\/|e\/|shorts\/)|youtu.be\/)([\w\-]{10,20})/i;

// Vimeo IDs should be only digits, let's try to get only a group of digits and suppose that's the video ID, scrap everything after.
// Docs link, watch for changes https://developer.vimeo.com/api/common-formats
const vimeoReg =
  /(?:http|https)?:?\/?\/?(?:www\.)?(?:player\.)?vimeo\.com\/(?:(?:channels\/(?:[\w*\/]*\/))|(?:groups\/(?:[\w*\/]*\/))|(?:videos\/|video\/|albums\/))?(\d+)/i;

// Use regex against url to get video ID, video urls supported are youtube and vimeo.
// Return videoID and placeholder (if needed), null if no match found.
export const videoUrlHelper = (url, previewImage) => {
  const ytVideoMatch = checkIfValidYTLink(url, true);
  let placeholder = previewImage
    ? isInternalURL(previewImage)
      ? `${flattenToAppURL(previewImage)}/@@images/image`
      : previewImage
    : null;
  let videoID = null;
  if (ytVideoMatch) {
    videoID = ytVideoMatch[1];
    if (!placeholder)
      placeholder = 'https://img.youtube.com/vi/' + videoID + '/sddefault.jpg';

    return [videoID, placeholder];
  } else {
    // maybe it's a Vimeo video, try a match against all vimeo link formats I am aware of from docs, not sure about albums.
    const vimeoVideoMatch = checkIfValidVimeoLink(url, true);
    if (vimeoVideoMatch) {
      videoID = vimeoVideoMatch[1];
      if (!placeholder)
        placeholder = 'https://vumbnail.com/' + videoID + '.jpg';
      return [videoID, placeholder];
    } else {
      // it could be an internal video, just return placeholder
      if (placeholder) return [null, placeholder];
    }
  }
  return [null, null];
};

const checkIfValidYTLink = (url, returnMatch = false) => {
  if (!url) return false;
  if (!url.includes('youtu')) return false;
  return returnMatch ? url.match(ytReg) : ytReg.test(url);
};

const checkIfValidVimeoLink = (url, returnMatch = false) => {
  if (!url) return false;
  if (!url.includes('vimeo')) return false;
  return returnMatch ? url.match(vimeoReg) : vimeoReg.test(url);
};

export const checkIfValidVideoLink = (url, allowedExternals = false) => {
  // If externals are allowed, I do not care.
  const isValidYT = checkIfValidYTLink(url);
  const isValidVimeo = checkIfValidVimeoLink(url);
  // This is a big leap of faith, maybe we could check if
  // provided url is actually a video in Plone
  const isInternalSource = isInternalURL(url);
  return isValidYT || isValidVimeo || isInternalSource || allowedExternals;
};
