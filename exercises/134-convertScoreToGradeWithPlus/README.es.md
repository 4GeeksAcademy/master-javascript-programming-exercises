# `134` convertScoreToGradeWithPlusAndMinus

## 📝 Instrucciones

Escribe una función llamada "convertScoreToGradeWithPlusAndMinus".

Dada una puntuación, "convertScoreToGradeWithPlusAndMinus" returna un string que representa la calificación de letra correspondiente a la puntuación dada.

Notas:
* (100 - 90) --> 'A'
* (89  - 80) --> 'B'
* (79  - 70) --> 'C'
* (69  - 60) --> 'D'
* (59  -  0) --> 'F'
* Si la puntuación dada es mayor que 100 o menor que 0, debería devolver 'PUNTUACIÓN NO VÁLIDA'.
* Si el puntaje está entre 0 y 2 (incluido) de un rango dado, devuelva la letra con un '-'
* Si el puntaje está entre 8 y 9 (incluido) de un rango dado, devuelva la letra con un '+'
* No hay F + y no hay F-.

```js
var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'

```