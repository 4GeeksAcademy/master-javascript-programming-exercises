function getLastElementOfProperty(obj, key) {
  // your code here
     if ( Array.isArray( obj[key] ) === false ){
      return undefined;
    }else if ( obj[key][0] === undefined){
      return undefined;
    }else{
      return obj[key][obj[key].length - 1];
    }
}

var obj = {
  key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output);