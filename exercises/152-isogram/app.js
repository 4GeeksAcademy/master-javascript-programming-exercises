function isIsogram(text) {
  // your code here
  let isogram = true;

  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < text.length; j++) {
      if (i != j && text.charAt(i).toLowerCase() == text.charAt(j).toLowerCase()) {
        isogram = false;
      }
    }
  }

  return isogram;
}

console.log(isIsogram("Camile")); // --> true
console.log(isIsogram("Camille")); // --> false
