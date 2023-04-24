function convertDoubleSpaceToSingle(str) {
    // your code here
    // replace only check for first occurrence
    // global replacement 
    return result = str.replace(/  +/g, " ")
    
}
let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"