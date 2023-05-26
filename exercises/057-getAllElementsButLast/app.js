function getAllElementsButLast(array) {
    // your code here
    return array.slice(0,-1)

}

let input = [1, 2, 3, 4];
let output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]
