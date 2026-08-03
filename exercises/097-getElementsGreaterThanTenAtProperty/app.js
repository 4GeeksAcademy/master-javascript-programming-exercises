// Write your function here
function getElementsGreaterThan10AtProperty (obj, key) {
    if (Array.isArray(obj[key])) {
        return obj[key].filter(value => value > 10);
    }
    return [];
}