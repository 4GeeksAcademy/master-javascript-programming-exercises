// Write your function here
function getOddLengthWordsAtProperty(obj, key) {
    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
        return []
    }

    let arr = obj[key]
    let newArr = []

    arr.forEach(e => {
        if(e.length %2!==0) {
            newArr.push(e)
        }
    })
    return newArr;
}
