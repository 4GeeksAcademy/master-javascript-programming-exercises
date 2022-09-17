var obj = {
    key: [2, 1, 5]
  };
  
  function getSquaredElementsAtProperty(obj, key) {
      // your code here
      if (!obj.key || !Array.isArray(obj.key) || obj.key.length < 1) return []
      else return obj.key.map(e=> e*e)
  
  }
  
  var output = getSquaredElementsAtProperty(obj, 'key');
  console.log(output); // --> [4, 1, 25]