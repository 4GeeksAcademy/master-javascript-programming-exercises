// Write your function here
function removeElement(array, element){
    return array.filter(item => item != element);
}


let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]