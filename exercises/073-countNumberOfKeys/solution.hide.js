let obj = {
    firstName: "Rafael",
    lastName: "Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27
}

function countNumberOfKeys(obj) {
    // your code here
    return Object.keys(obj).length;
}

let output = countNumberOfKeys(obj);
console.log(output); // --> 3
