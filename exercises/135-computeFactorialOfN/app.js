function computeFactorialOfN(n) {
    // your code here
    if(n<1){return 'El número debe ser un natural (mayor que 0)'}
    let factor = 1;
    for(i = n; i > 0;i--){
        factor *= i;
    }
    return factor;
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24
