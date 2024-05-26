function removeFromBackOfNew(arr) {
  // your code here
  let newArr = [];
  let lastElem = arr.length-1;

    for (let x in arr) {
        if (x < lastElem) {
            newArr.push(arr[x]);
        }
    }

    return newArr;
}

let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]
