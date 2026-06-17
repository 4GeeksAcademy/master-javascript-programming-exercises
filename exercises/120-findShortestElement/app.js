function findShortestElement(arr) {
    // your code here
    let shortest = '';

    if (arr.length > 0) {
        shortest = arr[0];

        for (let i = 0; i < arr.length; i++) {
            if (shortest.length > arr[i].length) {
                shortest = arr[i].toString();
            }
        }
    }

    return shortest;
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'