// Write your function here
function removeElement(arr,index){
    let newArr = arr.filter((number)=>number!==index);
    return newArr;
}
