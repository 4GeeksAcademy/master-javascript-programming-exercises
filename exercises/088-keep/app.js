function keep(array, element) {
    return array.filter(item => item === element);
}


let output = keep([1, 2, 3, 2, 1], 2)
console.log(output); // --> [2, 2]