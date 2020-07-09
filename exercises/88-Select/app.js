function select(arr, obj) {
  // your code here
  let obj2 = {};
  for(i=0; i<arr.length; i++){
    for (key in obj){
      if (arr[i] === key){
        obj2[key] = obj[key];
      }
    }
  }
  return obj2;
  }


var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

var output = select(arr, obj);
console.log(output);