function removeFromFrontOfNew(arr) {
    // your code here
    let newArr = arr.filter((el, index) => index != 0) // creates new array with all elements of arr but the first one
    return newArr
}