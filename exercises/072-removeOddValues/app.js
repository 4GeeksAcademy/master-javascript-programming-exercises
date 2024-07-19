const isOdd = number => !!(number & 1);

function removeOddValues(obj) {
    // your code here
for (index in obj) {
  if (isOdd(obj[index])){
    delete obj[index];
  }
  }
}


let obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }
