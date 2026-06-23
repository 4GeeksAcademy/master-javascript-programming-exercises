// NOTE for further explanation of this solution visit: https://www.geeksforgeeks.org/a-program-to-check-if-strings-are-rotations-of-each-other/
function isRotated(str1, str2) {
  // your code here
  if (str1.length != str2.length) {
    return false;
  }

  let q1 = []
  for (let i = 0; i < str1.length; i++)
    q1.push(str1[i])

  let q2 = []
  for (let i = 0; i < str2.length; i++)
    q2.push(str2[i])

  let k = str2.length
  
  while (k--) {
    let ch = q2[0]
    q2.shift()
    q2.push(ch)
    if (JSON.stringify(q2) == JSON.stringify(q1))
      return true
  }

  return false
}

console.log(isRotated('hello world', 'orldhello w')); // --> true
console.log(isRotated('hello world', 'omrel wp')); // --> false

