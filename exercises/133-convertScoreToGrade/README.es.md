# `133` convertScoreToGrade

## 📝 Instrucciones:

1. Escribe una función llamada `convertScoreToGrade`. Dado un puntaje, `convertScoreToGrade` retorna un string que representa la calificación de letra correspondiente a la puntuación dada.

## 📎 Ejemplo:

```Js
let output = convertScoreToGrade(91);
console.log(output); // --> 'A'
```

## 💡 Pistas:

| Puntaje  	| Grado  	|
|:---------:|:-------:|
| 100 - 90 	| 'A'   	|
| 89 - 80  	| 'B'   	|
| 79 - 70  	| 'C'   	|
| 69 - 60  	| 'D'   	|
| 59 - 0   	| 'F'   	|

+ Si la puntuación dada es mayor que 100 o menor que 0, `convertScoreToGrade` debería retornar `INVALID SCORE`.
