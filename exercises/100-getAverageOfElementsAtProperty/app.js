// function getAverageOfElementsAtProperty(obj, key) {
  // your code here
// }
var obj = {
key: [1, 2, 3]
};

function getAverageOfElementsAtProperty(obj, key) {
var count = 0;
var average = 0;
    if(obj[key]<1 || !Array.isArray(obj[key])){return 0;}
    for(var prop in obj[key]){
    count = count + obj[key][prop];
}

average = count/obj[key].length
return average;
}

let output =getAverageOfElementsAtProperty(obj, 'key')
console.log(output)