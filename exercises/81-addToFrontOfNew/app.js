// Write your function here
function addToFrontOfNew(array,val){
return [val, array[0],array[1]]
}
var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); 
console.log(input); 