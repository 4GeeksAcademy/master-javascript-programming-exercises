function getOddLengthWordsAtProperty(obj, key) {
  // your code here
  let newArray = [];
  for (key in obj){
    if (Array.isArray(obj[key])){
    
    for (i=0; i<obj[key].length; i++){
      if (obj[key][i].length %2 !== 0){
         newArray.push(obj[key][i]);
      }
    }
    }
  }
  return newArray;
}

var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output);
