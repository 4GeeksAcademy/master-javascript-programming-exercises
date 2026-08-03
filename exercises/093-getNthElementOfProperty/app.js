// Write your function here
function getNthElementOfProperty (obj,key,n) {
    if (obj[key] && obj[key].length > 0) {
        return obj[key][n]
    }
    return undefined
}