function findShortestWordAmongMixedElements(arr) {
    // your code here
   if(arr.length === 0){
        return "";
    }
    
    let shortest = "";
    let firstStringFound = false;

    for(let i=0; i<arr.length; i++){

        if(typeof arr[i] === "string"){
            if(!firstStringFound){
                shortest = arr[i]
                firstStringFound = true;
            } else if(arr[i].length < shortest.length){
                shortest = arr[i]
            }
        } 
    }
   
    return shortest
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
