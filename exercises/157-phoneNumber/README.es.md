# `157` phoneNumber

## 📝 Instrucciones:

1. Tienes un arreglo de números que representan un número de teléfono. 

Ejemplo.
```js
[6, 5, 0, 8, 3, 5, 9, 1, 7, 2]
```
Regresa un string con este formato: `(650) 835-9172`.

+ **Una mala implementación** 
 ```Js
function renderPhoneNumber(numbers){
  return '(' + numbers[0] + numbers[1] + numbers[2] + ') '
    + numbers[3] + numbers[4] + numbers[5] + '-' 
    + numbers[6] + numbers[7] + numbers[8] + numbers[9];
}
```
+ **Lo que deberías hacer en su lugar** 

 Lee el esqueleto orientado a objetos. Después de comprender el flujo de procesamiento que de la información, completa la implementación.

## :bulb: Pista:

 * No dejes ningún método sin usar. 