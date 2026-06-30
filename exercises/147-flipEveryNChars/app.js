function flipEveryNChars(input, n) {
    // your code here
    let result = '';
    
    for (let i = 0; i < input.length; i += n) {
        let substring = input.slice(i, i + n);
        result += substring.split('').reverse().join('');
    }
    
    return result;
}


let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
