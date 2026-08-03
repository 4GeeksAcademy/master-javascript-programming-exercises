// Write your function here
function getIndexOf(char, string){
    let i = 0; 
    let indice =0; 
    while ( char !== string[i] || i<string[i].length){

        i++
    }
    indice =i; 
    if (indice > string.length) return -1;
    else return indice;
    
}