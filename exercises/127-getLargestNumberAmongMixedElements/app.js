function getLargestNumberAmongMixedElements(arr) {
    // your code here
    if(arr.length === 0){
        return 0
    }

    let largest = 0

    for(let i=0; i<arr.length; i++){
        if(typeof arr[i] === "number" && arr[i] > largest){
            largest = arr[i]
        }
    }

    return largest
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
