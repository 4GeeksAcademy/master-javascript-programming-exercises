function getAllElementsButLast(array) {
    // your code here
    let elementsButLast = array.slice(0, array.length - 1);
    return elementsButLast;
}

let input = [1, 2, 3, 4];
let output = getAllElementsButLast(input);
console.log(output); // --> [1, 2, 3]
