// returns the nth element of an 
// array located at the given key.


function getNthElementOfProperty( objeto, key, n){
if ( !objeto[key ] || n > objeto[key].length || !Array.isArray(objeto[key]) ){ 
    return undefined ;}
    return objeto[key][n]


}