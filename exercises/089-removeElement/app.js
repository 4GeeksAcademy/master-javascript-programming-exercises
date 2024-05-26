// Write your function here
function removeElement(arr, elem) {
    let items = [];

    items = arr.filter((i) => i != elem);

    return items;
}

let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); 