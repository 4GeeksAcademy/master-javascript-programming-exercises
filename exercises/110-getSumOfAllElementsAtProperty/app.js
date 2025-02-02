function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    let sum = 0;

    if (obj.hasOwnProperty(key) && obj[key].length > 0 && Array.isArray(obj[key])) {
        for (let i = 0; i < obj[key].length; i++) {
            sum += obj[key][i];
        }
        return sum;
    }

    return 0;
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
