function getAverageOfElementsAtProperty(obj, key){
    // your code here
    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0){
        return 0;
    }
    
    let sum = 0;

    for (let i = 0; i < obj[key].length; i++) {
      sum+=obj[key][i] 
    }

    return sum / obj[key].length;
}
