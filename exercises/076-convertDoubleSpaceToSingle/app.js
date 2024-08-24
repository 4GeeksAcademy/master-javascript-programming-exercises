function convertDoubleSpaceToSingle(str) {
    // your code here
    return str.replaceAll("  ", " ")
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
