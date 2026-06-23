// Write your function here
function keep(array, element){
    elementKeep = [];
    for (let i=0; i<array.length; i++){
        if (array[i]=== element ){
            elementKeep[i]= element;
        }
    }
    return elementKeep;
}