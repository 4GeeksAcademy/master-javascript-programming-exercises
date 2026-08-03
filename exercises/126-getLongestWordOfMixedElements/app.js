function getLongestWordOfMixedElements(arr) {
    // your code here
    if(arr.length === 0){return "";}
  let longest = -Infinity;
  for(i in arr){
      if(typeof arr[i] === 'string' && arr[i].length > longest){
      longest = arr[i];
    }

  }
  if (longest === -Infinity) {
    return "";
  }
  return longest;

}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
