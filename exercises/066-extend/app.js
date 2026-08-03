let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    for (const prop in obj2) {
        if (prop == obj1[prop]) {
            return obj2
        } else {
            return obj1 + obj2
        }
    }
}