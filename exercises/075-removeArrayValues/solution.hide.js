function removeArrayValues(obj) {
    // your code here
    for (let key in obj) {
        if (Array.isArray(obj[key])) {
          delete obj[key];
        }
      }
    return obj;
}
