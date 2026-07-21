# `138` convertScoreToGradeWithPlusAndMinus

## 📝 Instrucciones:

1. Escribe una función llamada `convertScoreToGradeWithPlusAndMinus`. Dado una puntaje, `convertScoreToGradeWithPlusAndMinus` retorna un string que representa la calificación de letra correspondiente a la puntuación dada.

## 📎 Ejemplo:

```js
let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
```

## 💡 Pistas:

| Puntaje  	| Grado  	|
|:---------:|:-------:|
| 100 - 90 	| 'A'   	|
| 89 - 80  	| 'B'   	|
| 79 - 70  	| 'C'   	|
| 69 - 60  	| 'D'   	|
| 59 - 0   	| 'F'   	|

+ Si el puntaje dado es mayor que 100 o menor que 0, debería retornar `INVALID SCORE`.

+ Si el puntaje está entre 0 y 2 (inclusivos) de un rango dado, devuelva la letra con un `-`.

+ Si el puntaje está entre 8 y 9 (inclusivos) de un rango dado, devuelva la letra con un `+`.

+ No existe `F+` ni `F-`.
