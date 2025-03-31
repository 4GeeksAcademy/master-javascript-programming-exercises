function findShortestElement(arr) {
    // your code here
    if (arr.length > 0) {
        let shortest = arr[0];
        for (element in arr) {
            if (arr[element].length < shortest.length) {
                shortest = arr[element];
            }
        }
        return shortest;
    } else {
        return '';
    }

}

let output = findShortestElement(['two', 'three', 'a']);
console.log(output); // --> 'a'