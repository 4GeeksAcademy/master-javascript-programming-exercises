function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
  let result = [];

  if (!obj[key] || !Array.isArray(obj[key])) {
    return result;
  }

  for (let i = 0; i < obj[key].length; i++){
    if (typeof obj[key][i] === 'string' && obj[key][i].length % 2 === 0) {
      result.push(obj[key][i]);
    }
  }

  return result;
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
