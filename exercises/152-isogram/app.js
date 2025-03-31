function isIsogram(text) {
  // your code here
  let lowerCaseText = text.toLowerCase()

  const chars = {};
  for (const char of lowerCaseText) {
    chars[char] = (chars[char] || 0) + 1;
  }
  let result = Object.entries(chars)
    .filter((char) => char[1] > 1)
    .map((char) => char[0]);
  if (result.length > 0) return false;
  else return true;
}

console.log(isIsogram('Camile')); // --> true
console.log(isIsogram('Camille')); // --> false
