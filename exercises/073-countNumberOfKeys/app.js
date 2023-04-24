let obj1 = {
    person:"Rafael",
    lastName:"Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27,
}

let obj2 = {
    a: 1,
    b: 2,
    c: 3
  };

function countNumberOfKeys(obj) {
    // your code here
    return Object.keys(obj).length;
   
}
console.log(countNumberOfKeys(obj1))
let output = countNumberOfKeys(obj2);
console.log(output); // --> 3
