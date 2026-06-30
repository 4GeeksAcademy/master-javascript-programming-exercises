function isEven(word){
  return word.length % 2 === 0;
}

function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    {
      if (!obj.hasOwnProperty(key) || !Array.isArray(obj[key]) || obj[key].length === 0) {
          return [];
      } 
      let arrlen = (obj[key]).length;
      let result = [];
      for (let i = 0; i< arrlen; i++){
          if (isEven((obj[key])[i])){
              result.push(obj[key][i]);
          }
      }
      return result;
  }
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
