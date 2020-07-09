function getIndexOf(char, str) {
  // your code here
  for (i=0; i<str.length; i++){
   return str.indexOf(char);  
  }
}

var output = getIndexOf('a', 'I am a hacker');
console.log(output);