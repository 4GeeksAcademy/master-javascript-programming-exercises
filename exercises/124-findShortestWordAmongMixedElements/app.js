function findShortestWordAmongMixedElements(arr) {
    // your code here
    let shortest = '9999999999999999999999999999999999999999999999999999999999999999999';

    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (shortest.length > arr[i].length && (typeof arr[i] == 'string')) {
                console.log('dentro');
                shortest = arr[i];
            }
        }
    }

    if (shortest == '9999999999999999999999999999999999999999999999999999999999999999999'){
        return '';
    }

    return shortest;
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
