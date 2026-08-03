function removeArrayValues(obj) {
    // your code here
    for (let prop in obj) {
        if (typeof obj[prop] == "object") {
            delete obj[prop]
        }
    }
    return obj
}