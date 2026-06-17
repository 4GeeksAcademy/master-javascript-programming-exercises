// Write your function here
function getElementsThatEqual10AtProperty (obj,key) {
    if (Array.isArray(obj[key])) {
        return obj[key].filter(para => para == 10)
    }
    return []
}