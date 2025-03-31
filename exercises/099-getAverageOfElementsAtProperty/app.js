function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if ((!obj[key] || obj[key].length == 0) || !Array.isArray(obj[key])) {
    return 0;
  }
  let total = 0;
  let contador = 0;
  obj[key].forEach((n) => {
    contador += 1;
    total += n;
  })
  return total / contador;

}