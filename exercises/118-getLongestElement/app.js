function getLongestElement(arr) {
    // your code here
    if(arr.length ===0){return '';}
    let longest ='';
    let longestLength = 0;
    for (i in arr){
        if (arr[i].length > longestLength){
            longestLength = arr[i].length;
            longest = arr[i];
        }
    }
    return longest;
    
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
