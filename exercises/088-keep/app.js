// Write your function here
function keep(arr,index){
    return arr.filter((number)=>number==index);
}

let output = keep([1, 2, 3, 2, 1], 2)
console.log(output); // --> [2, 2]