// Write your function here
function select(arr, obj) {
    let newObj = {};

    for (let i = 0; i < arr.length; i++) {
        for (let j in obj) {
            if (arr[i] == j) {
                newObj[j] = obj[j];
            }
        }
    }

    return newObj;
}

let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
let output = select(arr, obj);
console.log(output); 