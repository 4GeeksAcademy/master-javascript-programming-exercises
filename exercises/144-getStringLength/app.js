function getStringLength(string) {
    // your code here
    let flag = 0;
    for (i of string){
        flag += 1
    }
    return flag;
}

let output = getStringLength('hello');
console.log(output); // --> 5
