function findLongestPalindrome(sentence) {
  // your code here
  let longestPalindrome = '';

  for (let i = 0; i < sentence.length; i++) {
    let word = '';
    for (let j = i; j < sentence.length; j++) {
      word += sentence[j];
      if (isPalindrome(word) && word.length > longestPalindrome.length) longestPalindrome = word
    }
  }

  return longestPalindrome
}

function reverseString(string) {
  // your code here
  return string.split('').reverse().join('');
}

function isPalindrome(word) {
  // your code here
  return word.length > 1 && word.toLowerCase() === reverseString(word.toLowerCase());
}

let output = findLongestPalindrome("My dad is a racecar athlete");
console.log(output); // --> "a racecar a"
