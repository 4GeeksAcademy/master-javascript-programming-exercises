// Write your function here
function getOddLengthWordsAtProperty (obj,key) {
    if (Array.isArray(obj[key])) {
        return obj[key].filter(value => value.length % 2 != 0);
    }
    return []
}