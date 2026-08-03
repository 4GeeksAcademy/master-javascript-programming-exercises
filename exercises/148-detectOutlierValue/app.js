function detectOutlierValue(string) {
    // your code here
    let numbers = string.split(' ').map(Number);

    let evenCount = 0;
    let oddCount = 0;
    let lastEvenIndex = -1;
    let lastOddIndex = -1;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenCount++;
            lastEvenIndex = i + 1; 
        } else {
            oddCount++;
            lastOddIndex = i + 1; 
        }
    }
    if (evenCount === 1) {
        return lastEvenIndex;
    } else {
        return lastOddIndex;
    }
}


// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  // --> 2
