function getElementsLessThan100AtProperty(obj, key) {
  // your code here
  let newArray = [];
  for (key in obj){
    for (i=0; i<obj[key].length; i++){
      if (obj[key][i] < 100){
         newArray.push(obj[key][i]);
      }
    }
  }
  return newArray;
}

var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output);