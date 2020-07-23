function removeElement(array, discarder) {
  // your code here
   return array.filter(function(value) {
        return value !== discarder;
    });
}

    
  
var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output);