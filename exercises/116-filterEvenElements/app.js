function filterEvenElements(arr) {
    // your code here
    let newArr = [];
    for (i in arr){
      if(arr[i]%2 === 0){
      newArr.push(arr[i]);
      }
    }
    return newArr;
}

let output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
