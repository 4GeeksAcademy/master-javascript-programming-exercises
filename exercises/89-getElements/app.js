// Write your function here
const getElementsThatEqual10AtProperty= (obj, key) =>{
    let salida=[];
obj.key.map(dato=>{
   if (dato===10){
       salida.push(dato)
   }
})

return salida
}

var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]