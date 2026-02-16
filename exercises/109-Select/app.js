function select(array, objeto) { 
  let resultado = {};

  for (let i = 0; i < array.length; i++) {
    let clave = array[i]; 
    
    if (objeto.hasOwnProperty(clave)) {
      resultado[clave] = objeto[clave];
    }
  }

  return resultado;
}


let arr = ['a', 'c', 'e'];

let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4  
};
let output = select(arr, obj);
console.log(output);


