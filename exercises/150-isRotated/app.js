function isRotated(str1, str2) {
    // your code here
    let min = str1;

    for (let i = 0; i < str1.length; i++)
        {
            // left-rotate the string by 1 unit
            str1 = str1.substring(1) + str1.charAt(0);
 
            // update the result if the rotation is minimum so far
            if (str1.localeCompare(min) < 0) {
                min = str1;
            }
        }
console.log(min);
    if (min == str2) {
      return true;
    }
 
    return false;
  }
  
  console.log(isRotated('hello world', 'orldhello w')); // --> true
  console.log(isRotated('hello world', 'omrel wp')); // --> false
  
