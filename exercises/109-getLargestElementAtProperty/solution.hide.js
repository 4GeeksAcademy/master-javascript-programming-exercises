var obj = {
    key: [1, 2, 4]
  };
  function getLargestElementAtProperty(obj, key) {
      // your code here
      if (!obj.key || !Array.isArray(obj.key) || obj.key.length < 1) return []
        else {
          let aux = 0
          obj.key.map(item=> item>aux ? aux = item : null)
          return aux
        }
  }
  var output = getLargestElementAtProperty(obj, 'key');
  console.log(output); // --> 4