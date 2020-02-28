exports.readingTime = text => {
  const wordsPerMinute = 250;
  let plain_text = text.replace(/<[^>]*>/g, '');
  let result = 0;
  let textLength = plain_text.length;
  if (textLength > 0) {
    result = Math.ceil(textLength / wordsPerMinute);
  }
  return result;
};
