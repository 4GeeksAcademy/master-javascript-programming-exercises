function findLongestPalindrome(sentence) {
    // split sentence into words
    // iterate words and collect the palindromes
    // sort the list of palindromes by word length
    // return the largest item in the sorted list
    let newStr = ''
    sentence = sentence.split(" ")
    for (let x=0;x<sentence.length;x++){
      if (isPalindrome(sentence[x])) newStr+=sentence[x] + " "
    }
    return newStr
  }
  
  function reverseString(string) {
    return string.split("").reverse().join("")
    
  }
  
  function isPalindrome(word) {
    // hint: you can detect palindromes by comparing a string to its reverse
    if (word == reverseString(word)) return true
  
  }
  
  function sortAscendingByLength(a, b) {
    if (a.length > b.length) {
      return 1;
    } else if (a.length < b.length) {
      return -1;
    }
    return 0;
  }
  
  console.log(findLongestPalindrome("My dad is a racecar athlete"))