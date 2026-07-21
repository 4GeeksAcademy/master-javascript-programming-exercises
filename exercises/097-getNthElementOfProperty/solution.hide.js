// Write your function here
function getNthElementOfProperty(obj, key, n) {
    if(!obj[key] || !Array.isArray(obj[key]) || n >= obj[key].length) {
        return undefined
    }
    return obj[key][n];
}
