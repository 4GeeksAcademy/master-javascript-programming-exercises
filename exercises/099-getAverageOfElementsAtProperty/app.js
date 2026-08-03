function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if (!obj.hasOwnProperty(key) || !Array.isArray(obj[key]) || obj[key].length === 0) {
    return 0;
} 
let arrlen = (obj[key]).length;
let result = 0;
for (let i = 0; i< arrlen; i++){
    
    {
        result += (obj[key][i]);
    }
}
return result/arrlen;

}


let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2  