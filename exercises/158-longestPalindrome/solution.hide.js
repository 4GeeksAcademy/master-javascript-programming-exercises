function findLongestPalindrome(sentence) {
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
  return string.split('').reverse().join('');
}

function isPalindrome(word) {
  return word.length > 1 && word.toLowerCase() === reverseString(word.toLowerCase());
}

console.log(findLongestPalindrome("My dad is a racecar athlete"))