// Write your function here
function addToBackOfNew(Narray,val){
    return [Narray[0],Narray[1],val]
}
var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]