function flipPairs(input) {
    // your code here
    let arr = input.split('');
    for (i = 0;i< arr.length;i+=2){
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    return arr.join('');
}

let input = "Can you see what this is about?";
let output = flipPairs(input);
console.log(output); // --> aC noy ues ehwtat ih ssia obtu?
