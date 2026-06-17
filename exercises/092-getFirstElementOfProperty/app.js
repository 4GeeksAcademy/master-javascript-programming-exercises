// Write your function here
function getFirstElementOfProperty(obj, key) {
    if (obj[key] && obj[key].length > 0) {
        return obj[key][0]
    }
    return undefined
}