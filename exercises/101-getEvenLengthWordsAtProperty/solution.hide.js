function getEvenLengthWordsAtProperty(obj, key) {
  // your code here
  if (!Array.isArray(obj[key])) {
    return [];
  }
  
  return obj[key].filter(word => word.length % 2 === 0);
}
