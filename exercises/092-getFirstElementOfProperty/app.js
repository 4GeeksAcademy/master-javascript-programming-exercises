// returns the first element of the 
// array located at the given key.

function getFirstElementOfProperty(objeto, key){

   if (!objeto[key] || !Array.isArray(objeto[key]) ){ 
    return undefined;
}
    return objeto[key][0]



}