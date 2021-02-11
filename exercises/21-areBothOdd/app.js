// Write your function here
function areBothOdd(num1,num2){
    if(num1%2==0 || num2%2==0){
        return false
    }else{
        return true
    }
}
var output = areBothOdd(3, 1);
console.log(output); // --> verdadero
