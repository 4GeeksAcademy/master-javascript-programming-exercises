let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    for (let i in obj2) {
        if(!(i in obj1)){
            obj1[i] = obj2[i]
        }
    }
}

console.log(obj1)