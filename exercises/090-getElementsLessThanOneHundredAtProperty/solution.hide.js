// Write your function here
function getElementsLessThan100AtProperty(obj, key){
    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])){
        return []
    }

    let arr = obj[key]
    let newArr = []

    arr.forEach(e=>{
        if(e < 100){
            newArr.push(e)
        }
    })

    return newArr;
}