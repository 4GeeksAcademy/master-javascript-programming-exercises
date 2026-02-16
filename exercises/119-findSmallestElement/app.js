function findSmallestElement(arr) {
    // your code here
    if (arr.length === 0){
        return 0
    }

    let smallest = 0;

    smallest = Math.min(...arr)

    return smallest
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1