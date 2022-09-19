function sumDigits(num) {
  // your code here
  let strNum = num.toString();
  let aux = 0;
  let result = 0;
  while (strNum[aux] != undefined) {
    if (strNum[aux] === '-') {
      let aux2 = strNum[aux] + strNum[aux + 1];
      aux2 = parseInt(aux2);
      result += aux2;
      aux += 2;
    } else {
      result += parseInt(strNum[aux]);
      aux++;
    }
  }
  return result;
}
let output = sumDigits(-316);
console.log(output); // --> 4
