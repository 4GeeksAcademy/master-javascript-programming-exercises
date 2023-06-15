function removeEvenValues(obj) {
    // your code here
    for (let key in obj) {
        if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
          delete obj[key];
        }
      }
      return obj;
}
