// Write your function here
function getElementsLessThan100AtProperty  (obj,key) {
    if (Array.isArray(obj[key])) {
        return obj[key].filter(para => para < 100)
    }
    return []
}