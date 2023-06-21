// Write your function here
function removeElement(arr, n) {
    let newArr = []

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] != n) {
          newArr.push(arr[i])  
        }
    }
    return newArr
}
