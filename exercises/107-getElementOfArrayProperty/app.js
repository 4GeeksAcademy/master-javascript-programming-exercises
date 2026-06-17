function getElementOfArrayProperty(obj, key, index) {
    // your code here

    if (Array.isArray(obj[key]) && obj.hasOwnProperty(key) && obj[key].length > 0 && index < obj[key].length) {
        return obj[key][index];
    }

    return undefined;
}

let obj = {
    key: ['Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
