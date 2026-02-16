function getSquaredElementsAtProperty(obj, key) {
    // your code here
    
    let result = []

    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0){
      return result
    }
    
    for(let i=0; i<obj[key].length; i++){
      
      result.push((obj[key][i])**2)
    }

    return result
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
