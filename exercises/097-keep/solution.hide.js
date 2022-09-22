// Write your function here
function keep(arr, element){
    let newArr = []

    arr.forEach(e=>{
        if(e == element){
            newArr.push(e)
        }
    })

    return newArr;
}