function getLengthOfShortestElement(arr) {
    // your code here
    if(arr.length === 0){
        return 0;
    }
    
    let shortest = arr[0].length;

    for(let i=0; i<arr.length; i++){
        if(arr[i] < shortest){
            shortest = arr[i].length
        }
    }

    return shortest
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
