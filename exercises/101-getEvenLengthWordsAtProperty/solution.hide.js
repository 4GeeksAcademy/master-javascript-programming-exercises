function getEvenLengthWordsAtProperty(obj, key) {
  // your code here
  if (!obj[key] || !Array.isArray(obj[key])) {
    return []
  } else {
    let aux = []
    obj[key].map(e => {
      e.length % 2 == 0 ? aux.push(e) : null
    })
    return aux;
  }
}
