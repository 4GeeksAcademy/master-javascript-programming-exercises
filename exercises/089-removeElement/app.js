// Write your function here
function removeElement (arr, discarde) {
    let newArr = [];
for (let i=0; i <= arr.length; i++)
    if (arr[i] !== discarde) {
        newArr[i]= arr[i];
    }
}