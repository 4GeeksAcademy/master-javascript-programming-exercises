var obj = {
 key: ['Jamil', 'Albrey']
};
function getElementOfArrayProperty(obj, key, index) {
    // your code here
    if (obj[key] === undefined) {
        return undefined;
    }
    if (Array.isArray(obj[key]) === false) {
        return undefined;
    }
    if (obj[key].length === 0) {
        return undefined;
    }

    return obj[key][index];
}
var output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'