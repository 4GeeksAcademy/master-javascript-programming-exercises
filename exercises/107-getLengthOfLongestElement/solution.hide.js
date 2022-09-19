function getLengthOfLongestElement(arr) {
    // your code here
    if (arr.length < 1) return 0
    else {
        let aux = 0
        arr.map(item=> item.length > aux ? aux = item.length : null)
        return aux;
    }
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5