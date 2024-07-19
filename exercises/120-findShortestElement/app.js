function findShortestElement(arr) {
    // your code here
    if(arr.length ===0){return '';}
    let shortest ='';
    let shortestLength = 150;
    for (i in arr){
        if (arr[i].length < shortestLength){
            shortestLength = arr[i].length;
            shortest = arr[i];
        }
    }
    return shortest;
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'