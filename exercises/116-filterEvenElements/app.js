function filterEvenElements(arr) {
    // your code here
    let filtro = []

    for(let i=0; i<arr.length;i++){
        if(arr[i] % 2 === 0){
            filtro.push(arr[i])
        }
    }

    return filtro
}

let output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
