function getEvenLengthWordsAtProperty(obj, key) {
  // your code here
  if (!Array.isArray(obj[key])) {
    return [];
  }
  
  return obj[key].filter(word => word.length % 2 === 0);
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
