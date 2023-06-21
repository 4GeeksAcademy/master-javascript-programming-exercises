function getSquaredElementsAtProperty(obj, key) {
    // Your code here
    if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1) return []
    else return obj[key].map(e => e * e);
}

let obj = {
    car: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'car');
console.log(output); // --> [4, 1, 25]
