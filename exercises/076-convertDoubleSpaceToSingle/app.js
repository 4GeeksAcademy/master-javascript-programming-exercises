function convertDoubleSpaceToSingle(str) {
    // your code here
    str = str.replaceAll("  ", " ");
    return str;
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
