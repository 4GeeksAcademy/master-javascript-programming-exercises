function multiply(num1, num2) {
    // your code here
    let total=0;
    for(let i=0;i<Math.abs(num2);i++){
        total+=num1;
    }
    if(num1===0 || num2===0){
        return 0;
    }
    if(num1<0 || num2<0){
        total=-total;
        return total;
    }else{
        return total
    }
    
}

let output = multiply(0, -5);
console.log(output); // --> 28
