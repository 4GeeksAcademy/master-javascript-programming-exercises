function findLongestPalindrome(sentence) {
  // your code here
  /*
  let arr = sentence.split(" ");
  let palidromes = [];

  for (let i = 0; i < arr.length; i++) {
    if (isPalindrome(arr[i])) {
      palidromes.push(arr[i]);
    }
  }

  return palidromes;
  */

  let reversed = reverseString(sentence);
  let fromLast = reversed.length;

  for (let i = 0; i < sentence.length; i++) {
    
    //console.log("REVERSE: " + reversed.substring(i, fromLast--));
    //console.log("SENTENCE: " + sentence.substring(i, fromLast--));

    console.log(sentence.match((reversed.substring(i, fromLast--))));

  }
}

function reverseString(string) {
  // your code here
  let reversed = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i]
  }

  return reversed;
  
}

function isPalindrome(word) {
  // your code here
  if (word == reverseString(word)) {
    return true;
  }

  return false;
}

let output = findLongestPalindrome("My dad is a racecar athlete");
                                //("etelhta racecar a si dad yM")
console.log(output); // --> "a racecar a"
