// Write your function here
function removeElement(array, num){

    let new_array = []

    new_array = array.filter(i => i !== num)

    return new_array
}

let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output);