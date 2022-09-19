// Write your function here
function select(arr, obj) {
    let newObj = {}
    arr.forEach((e, index)=>{
        if(obj[e]){
            newObj[e] = obj[e]
        }
    })

    return newObj
}