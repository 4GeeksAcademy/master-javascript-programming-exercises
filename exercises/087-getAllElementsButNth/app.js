function getAllElementsButNth(array, n) {
    // your code here
newArr= [];
for (i=0; i<array.length; i++){
    if (array[i]!==n){
         newArr[i]= array[i];
        }
}
return newArr; 
}

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
