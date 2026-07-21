# `158` findLongestPalindrome

A palindrome is a text that reads the same backward as forward. For example, in the string `My dad is a racecar athlete`, the longest palindrome is `a racecar a` (*whitespaces count as valid characters*). Other palindromes in the above string include 'dad', 'ete', ' dad ' (including the whitespace on each side of dad).

## 📝 Instructions:

1. Given a string, the function `findLongestPalindrome` returns the longest palindrome on that string.

## 📎 Example:

```javascript
let output = findLongestPalindrome("My dad is a racecar athlete");
console.log(output); // --> "a racecar a"
```

## 💡 Hints:

+ Use every function.

+ If there are multiple palindromes with the same length, return the last one.

+ The given string will only contain letters (no symbols, punctuation signs or numbers).

+ It should not be case sensitive.

+ You can detect palindromes by comparing a string to its reverse.
