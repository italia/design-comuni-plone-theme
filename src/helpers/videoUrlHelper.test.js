/* eslint-disable no-unused-vars */
import { videoUrlHelper, checkIfValidVideoLink } from './videoUrlHelper';
import config from '@plone/volto/registry';

const { settings } = config;

const YT_TEST_ID = 'dQw4w9WgXcQ';
const VIMEO_TEST_ID = '346762373';

describe('videoUrlHelper', () => {
  it('recognizes valid video links', () => {
    const ytValid = checkIfValidVideoLink(
      'https://www.youtube.com/watch?v=' + YT_TEST_ID,
    );
    const vimeoValid = checkIfValidVideoLink(
      'https://www.player.vimeo.com/albums/' + VIMEO_TEST_ID + '/comments',
    );
    const internalValid = checkIfValidVideoLink('http://localhost:3000/video');
    expect(ytValid).toBe(true);
    expect(vimeoValid).toBe(true);
    expect(internalValid).toBe(true);
  });
  it('recognizes invalid video links', () => {
    const ytInvalid = checkIfValidVideoLink(
      'https://www.youtube.com/watch?' + YT_TEST_ID,
    );
    const vimeoInvalid = checkIfValidVideoLink(
      'https://www.player.vimeo.com/vid/' + VIMEO_TEST_ID + '/comments',
    );
    const internalInvalid = checkIfValidVideoLink(
      'https://www.google.it/video',
    );
    expect(ytInvalid).toBe(false);
    expect(vimeoInvalid).toBe(false);
    expect(internalInvalid).toBe(false);
  });
  it('allows whatever external links if allowExternal setting is enabled', () => {
    const internalValid = checkIfValidVideoLink(
      'https://www.google.it/video',
      true,
    );
    expect(internalValid).toBe(true);
  });
  it('disallows external links if allowExternal setting is not enabled', () => {
    const internalValid = checkIfValidVideoLink(
      'https://www.google.it/video',
      false,
    );
    expect(internalValid).toBe(false);
  });
  it('resolves basic watch yt link', () => {
    const [videoId, _] = videoUrlHelper(
      'https://www.youtube.com/watch?v=' + YT_TEST_ID,
      '',
    );
    expect(videoId).toBe(YT_TEST_ID);
  });
  it('resolves alternative watch yt link', () => {
    const [videoId, _] = videoUrlHelper(
      'https://www.youtube.com/watch?vi=' + YT_TEST_ID,
      '',
    );
    expect(videoId).toBe(YT_TEST_ID);
  });
  it('resolves watch yt link with feature part', () => {
    const [videoId, _] = videoUrlHelper(
      'https://www.youtube.com/watch?v=' + YT_TEST_ID + '&feature=youtu.be',
      '',
    );
    expect(videoId).toBe(YT_TEST_ID);
  });
  it('resolves watch yt link with playnext and feature parts', () => {
    const [videoId, _] = videoUrlHelper(
      'https://www.youtube.com/watch?v=' +
        YT_TEST_ID +
        '&playnext_from=TL&videos=osPknwzXEas&feature=sub',
      '',
    );
    expect(videoId).toBe(YT_TEST_ID);
  });
  it('resolves watch yt link with list parts', () => {
    const [videoId, _] = videoUrlHelper(
      'https://www.youtube.com/watch?v=' +
        YT_TEST_ID +
        '&list=PLGup6kBfcU7Le5laEaCLgTKtlDcxMqGxZ&index=106&shuffle=2655',
      '',
    );
    expect(videoId).toBe(YT_TEST_ID);
  });
  it('resolves watch yt link with feature embedded', () => {
    const [videoId, _] = videoUrlHelper(
      'https://www.youtube.com/watch?feature=player_embedded&v=' + YT_TEST_ID,
      '',
    );
    expect(videoId).toBe(YT_TEST_ID);
  });
  it('resolves v yt link', () => {
    const [videoId, _] = videoUrlHelper(
      'https://www.youtube.com/?v=' + YT_TEST_ID,
      '',
    );
    expect(videoId).toBe(YT_TEST_ID);
  });
  it('resolves feature embedded with v yt link', () => {
    const [videoId, _] = videoUrlHelper(
      'https://www.youtube.com/?feature=player_embedded&v=' + YT_TEST_ID,
      '',
    );
    expect(videoId).toBe(YT_TEST_ID);
  });
  it('resolves alternative v yt link ', () => {
    const [videoId, _] = videoUrlHelper(
      'https://www.youtube.com/v/' + YT_TEST_ID,
      '',
    );
    expect(videoId).toBe(YT_TEST_ID);
  });
  it('resolves alternative v yt link with additional params', () => {
    const [videoId, _] = videoUrlHelper(
      'https://www.youtube.com/v/' +
        YT_TEST_ID +
        '?fs=1&amp;hl=en_US&amp;rel=0',
      '',
    );
    expect(videoId).toBe(YT_TEST_ID);
  });
  it('resolves alternative embed yt link ', () => {
    const [videoId, _] = videoUrlHelper(
      'https://www.youtube.com/e/' + YT_TEST_ID,
      '',
    );
    expect(videoId).toBe(YT_TEST_ID);
  });
  it('resolves bare v yt link with feature part', () => {
    const [videoId, _] = videoUrlHelper(
      'https://youtube.com/?v=' + YT_TEST_ID + '&feature=youtube_gdata_player',
      '',
    );
    expect(videoId).toBe(YT_TEST_ID);
  });
  it('resolves bare vi yt link with feature part', () => {
    const [videoId, _] = videoUrlHelper(
      'https://youtube.com/?vi=' + YT_TEST_ID + '&feature=youtube_gdata_player',
      '',
    );
    expect(videoId).toBe(YT_TEST_ID);
  });
  it('resolves alternative vi yt link with feature part', () => {
    const [videoId, _] = videoUrlHelper(
      'https://youtube.com/vi/' + YT_TEST_ID + '?feature=youtube_gdata_player',
      '',
    );
    expect(videoId).toBe(YT_TEST_ID);
  });
  it('resolves youtube-nocookie v link', () => {
    const [videoId, _] = videoUrlHelper(
      'https://www.youtube-nocookie.com/v/' +
        YT_TEST_ID +
        '?version=3&hl=en_US&rel=0',
      '',
    );
    expect(videoId).toBe(YT_TEST_ID);
  });
  it('resolves youtube-nocookie embed link', () => {
    const [videoId, _] = videoUrlHelper(
      'https://www.youtube-nocookie.com/embed/' + YT_TEST_ID + '?rel=0',
      '',
    );
    expect(videoId).toBe(YT_TEST_ID);
  });
  it('resolves youtube link with channel and video ref', () => {
    const [videoId, _] = videoUrlHelper(
      'https://youtube.com/?feature=channel&v=' + YT_TEST_ID,
      '',
    );
    expect(videoId).toBe(YT_TEST_ID);
  });
  it('resolves alternative youtube link with channel and video ref', () => {
    const [videoId, _] = videoUrlHelper(
      'https://youtube.com/vi/' + YT_TEST_ID + '&feature=channel',
      '',
    );
    expect(videoId).toBe(YT_TEST_ID);
  });
  it('resolves alternative youtube youtu.be domain link', () => {
    const [videoId, _] = videoUrlHelper('https://youtu.be/' + YT_TEST_ID, '');
    expect(videoId).toBe(YT_TEST_ID);
  });
  it('resolves alternative youtube youtu.be domain link with extra params', () => {
    const [videoId, _] = videoUrlHelper(
      'https://youtu.be/' + YT_TEST_ID + '?feature=youtube_gdata_player',
      '',
    );
    expect(videoId).toBe(YT_TEST_ID);
  });
  it('resolves alternative youtube youtu.be domain link with list params', () => {
    const [videoId, _] = videoUrlHelper(
      'https://youtu.be/' +
        YT_TEST_ID +
        '?list=PLToa5JuFMsXTNkrLJbRlB--76IAOjRM9b',
      '',
    );
    expect(videoId).toBe(YT_TEST_ID);
  });
  it('resolves yt link where videoid has special chars (_)', () => {
    const [videoId, _] = videoUrlHelper(
      'https://www.youtube.com/watch?v=761ae_KDg_Q',
      '',
    );
    expect(videoId).toBe('761ae_KDg_Q');
  });
  it('resolves yt link where videoid has special chars (-)', () => {
    const [videoId, _] = videoUrlHelper(
      'https://www.youtube.com/watch?v=QH2-TGUlwu4',
      '',
    );
    expect(videoId).toBe('QH2-TGUlwu4');
  });
  it('resolves yt link to yt shorts', () => {
    const [videoId, _] = videoUrlHelper(
      'https://www.youtube.com/shorts/' + YT_TEST_ID,
      '',
    );
    expect(videoId).toBe(YT_TEST_ID);
  });
  it('resolves yt link to yt mobile domain', () => {
    const [videoId, _] = videoUrlHelper(
      'https://m.youtube.com/watch?v=' + YT_TEST_ID,
      '',
    );
    expect(videoId).toBe(YT_TEST_ID);
  });
  it('resolves vimeo link', () => {
    const [videoId, _] = videoUrlHelper(
      'https://vimeo.com/' + VIMEO_TEST_ID,
      '',
    );
    expect(videoId).toBe(VIMEO_TEST_ID);
  });
  it('resolves vimeo channel link', () => {
    const [videoId, _] = videoUrlHelper(
      'https://vimeo.com/channels/mychannel/' + VIMEO_TEST_ID,
      '',
    );
    expect(videoId).toBe(VIMEO_TEST_ID);
  });
  it('resolves vimeo gropus/shortfilms/videos link', () => {
    const [videoId, _] = videoUrlHelper(
      'https://vimeo.com/groups/shortfilms/videos/' + VIMEO_TEST_ID,
      '',
    );
    expect(videoId).toBe(VIMEO_TEST_ID);
  });
  it('resolves vimeo albums link', () => {
    const [videoId, _] = videoUrlHelper(
      'https://vimeo.com/albums/' + VIMEO_TEST_ID,
      '',
    );
    expect(videoId).toBe(VIMEO_TEST_ID);
  });
  it('resolves vimeo link with extra params', () => {
    const [videoId, _] = videoUrlHelper(
      'https://vimeo.com/video/' + VIMEO_TEST_ID + '/comments',
      '',
    );
    expect(videoId).toBe(VIMEO_TEST_ID);
  });
  it('resolves vimeo player.vimeo domain link', () => {
    const [videoId, _] = videoUrlHelper(
      'https://player.vimeo.com/video/' + VIMEO_TEST_ID,
      '',
    );
    expect(videoId).toBe(VIMEO_TEST_ID);
  });
  it('resolves vimeo player.vimeo domain link with extra params', () => {
    const [videoId, _] = videoUrlHelper(
      'https://player.vimeo.com/video/' + VIMEO_TEST_ID + '/comments',
      '',
    );
    expect(videoId).toBe(VIMEO_TEST_ID);
  });
  it('resolves vimeo player.vimeo domain albums link', () => {
    // can't get to see a real one on vimeo site, docs not really helpful
    const [videoId, _] = videoUrlHelper(
      'https://player.vimeo.com/albums/' + VIMEO_TEST_ID,
      '',
    );
    expect(videoId).toBe(VIMEO_TEST_ID);
  });
  it('generates YT placeholder correctly', () => {
    const [_, placeholder] = videoUrlHelper(
      'https://www.youtube.com/watch?v=' + YT_TEST_ID,
      '',
    );

    expect(placeholder).toBe(
      'https://img.youtube.com/vi/' + YT_TEST_ID + '/hqdefault.jpg',
    );
  });
  it('generates vimeo placeholder correctly', async () => {
    const [_, placeholder] = videoUrlHelper(
      'https://vimeo.com/video/' + VIMEO_TEST_ID,
      '',
    );

    expect(placeholder).toBe('https://vumbnail.com/' + VIMEO_TEST_ID + '.jpg');
  });
});
