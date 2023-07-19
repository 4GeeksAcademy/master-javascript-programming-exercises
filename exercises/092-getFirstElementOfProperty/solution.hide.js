// Write your function here
function getFirstElementOfProperty(obj, key) {
    if(!obj[key] || !Array.isArray(obj[key])) {
        return undefined
    }

    return obj[key][0]
}
