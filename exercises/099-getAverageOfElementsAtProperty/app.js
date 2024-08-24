function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  let suma = 0
  if (Array.isArray(obj[key]) && obj[key].length > 0) {
    for (let i = 0; i < obj[key].length; i++) {
      suma += obj[key][i]
    }
    return suma / obj[key].length
  }
  return 0
}