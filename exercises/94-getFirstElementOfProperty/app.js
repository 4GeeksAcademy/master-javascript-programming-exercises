function getFirstElementOfProperty(obj, key) {
  // your code here
 if (key in obj){
        if (Array.isArray(obj[key])){
            if (obj[key].length){
                return obj[key][0];
            }
        }
    }
    return undefined;
}

var obj = {
  key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output); 