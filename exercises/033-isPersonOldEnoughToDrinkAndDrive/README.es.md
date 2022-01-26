# `33` isPersonOldEnoughToDrinkAndDrive

## 📝 Instrucciones:

1. Escribe una función llamada `isPersonOldEnoughToDrinkAndDrive`.

Dado un objeto `persona`, que contiene una propiedad `edad`, `isPersonOldEnoughToDrinkAndDrive` devuelve si la persona dada tiene la edad suficiente para beber y conducir legalmente en los Estados Unidos.

## :bulb: Pista:

 + La edad legal para beber alcohol en los Estados Unidos es de 21 años. 
 
 + La edad legal para conducir en los Estados Unidos es de 16 años. 
 
 + Siempre es ilegal beber y conducir en los Estados Unidos :laughing: pero en este caso haremos una excepción 🤫.

```Javascript
var obj = {
  age: 45
};
var output = isPersonOldEnoughToDrinkAndDrive(obj);
console.log(output); // --> true
```