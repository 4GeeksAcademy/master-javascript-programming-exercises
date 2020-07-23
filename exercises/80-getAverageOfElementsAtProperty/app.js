function getAverageOfElementsAtProperty(obj, key) {
  // your code here
    if (Array.isArray(obj[key]) === false || (obj[key] === undefined) || obj[key].length ===0){
     return 0;
    }else{
  let sum = 0;
  for (key in obj){
    for (i=0; i<obj[key].length; i++){
      sum += obj[key][i];
    }
    let average = sum / obj[key].length;
    return average;
  }
}
}

var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output);