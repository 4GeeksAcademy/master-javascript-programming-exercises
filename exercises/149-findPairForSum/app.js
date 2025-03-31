function findPairForSum(array, number) {
  // your code here
  for(num in array){
    for(let i=0;i<array.length;i++){
      if(array[num]+array[i] == number){
        return [array[num],array[i]];
      }
    }
  }
  
}

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
