exports.readingTime = text => {
  const wordsPerMinute = 250;
  let plain_text = text.replace(/<[^>]*>/g, '');
  let textLength = plain_text.length;
  return textLength > 0 ? Math.ceil(textLength / wordsPerMinute) : 0;
};
