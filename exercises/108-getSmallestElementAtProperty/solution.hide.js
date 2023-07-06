function getSmallestElementAtProperty(obj, key) {
  // your code here
  if (!Array.isArray(obj[key]) || (obj[key].length === 0)) {
    return [];
  }
  
  let arr = obj[key]
  let smallest = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  
  return smallest;
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
