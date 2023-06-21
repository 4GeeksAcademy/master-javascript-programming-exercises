function getStringLength(string) {
    // your code here
    let count = 0;
    for (let char of string) {
      count++;
    }
    return count;
  }
  
  let output = getStringLength('hello');
  console.log(output); // --> 5

/*

  Solution #2:

function getStringLength(string) {
  // your code here
  return [...string].reduce((a) => a + 1, 0);
}

let output = getStringLength('hello');
console.log(output); // --> 5

*/
