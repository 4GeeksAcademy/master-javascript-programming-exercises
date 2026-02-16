function convertDoubleSpaceToSingle(str) {
    // your code here
    let string_v1 = str.split("  ")

    let string_v2 = string_v1.join( " ")
    
    return string_v2
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
