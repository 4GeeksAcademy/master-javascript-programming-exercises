function getSmallestElementAtProperty(obj, key) {
    // your code here

    //[i]
    //
   let resulta = []
   
   if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0 ){
    return resulta
   }

   resulta = Math.min(...obj[key])
       
   return resulta
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
