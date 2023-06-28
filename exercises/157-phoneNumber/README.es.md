# `157` phoneNumber

## 📝 Instrucciones:

1. Usa el esqueleto dado y modifica las funciones para que dado un array de números, genere un número de teléfono en el siguiente formato: `(000) 000-0000`

## 📎 Ejemplo:

```js
let output = PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]).render();
console.log(output); // "(650) 835-9172"
```

## 💡 Pistas:

+ No dejes ningún método sin usar. 

+ Este es un ejemplo de una mala implementación:

 ```Js
function renderPhoneNumber(numbers){
  return '(' + numbers[0] + numbers[1] + numbers[2] + ') '
    + numbers[3] + numbers[4] + numbers[5] + '-' 
    + numbers[6] + numbers[7] + numbers[8] + numbers[9];
}
```

+ Lo que deberías hacer en su lugar es leer el esqueleto orientado a objetos y después de comprender el flujo de procesamiento de la información, completar la implementación.
