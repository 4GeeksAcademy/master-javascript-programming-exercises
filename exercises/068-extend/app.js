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
    k1 = Object.keys(obj1)
    k2 = Object.keys(obj2)
    nck = k2.filter(x => !k1.includes(x))
    
    for (i in nck){
        obj1[nck[i]]=obj2[nck[i]]
    }
    return obj1


}

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}
console.log(extend(obj1, obj2));
