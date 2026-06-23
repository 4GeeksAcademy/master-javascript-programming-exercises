// Write your function here
function getElementsGreaterThan10AtProperty(obj, key) {
    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
        return []
    }

    let arr = obj[key]
    let newArr = []

    arr.forEach(e => {
        if (e > 10) {
            newArr.push(e)
        }
    })
    return newArr;
}
