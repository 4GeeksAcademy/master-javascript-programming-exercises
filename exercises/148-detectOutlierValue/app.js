function detectOutlierValue(string) {
    // your code here
    let countEven = 0;
    let countOdd = 0;
    let arr = [];
    let position = -1;

    arr = string.split(" ");

    for (let i = 0; i < arr.length; i++) {
        if (Number.parseInt(arr[i]) % 2 == 0) {
            countEven++;
        } else {
            countOdd++;
        }
    }

    if (countEven < countOdd) {
        for (let i = 0 ; i < arr.length; i++) {
            if (Number.parseInt(arr[i]) % 2 == 0) {
                position = i+1;
            }
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (Number.parseInt(arr[i]) % 2 != 0) {
                position = i+1;
            }
        }
    }

    return position;
    
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  // --> 2
