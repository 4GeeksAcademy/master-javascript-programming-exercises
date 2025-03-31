function getStringLength(string) {
    // your code here
    let cont=0;
    for(k in string){
        cont+=1;
    }
    return cont;
    
}

let output = getStringLength('hello');
console.log(output); // --> 5
