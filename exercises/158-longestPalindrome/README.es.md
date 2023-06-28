# `158` findLongestPalindrome

Un Palíndromo es un texto que es igual si se lee de izquierda a derecha que de derecha a izquierda. Por ejemplo, en el string `My dad is a racecar athlete`, el palíndromo más largo es `a racecar a` (los espacios cuentan como caracteres válidos). Otros palíndromos en dicho string pueden ser 'dad', 'ete', ' dad ' (incluyendo los espacios a cada lado de la palabra ' dad ').

## 📝 Instrucciones:

1. Dado un string, la función `findLongestPalindrome` encuentra el palíndromo más largo dentro de una frase.

## 📎 Ejemplo:

```javascript
let output = findLongestPalindrome("My dad is a racecar athlete");
console.log(output); // --> "a racecar a"
```

## 💡 Pistas:

+ Utiliza todas las funciones en el esqueleto.

+ Si hay múltiples palíndromos de igual longitud, devuelve el último.

+ La frase solo contendrá letras (sin símbolos, signos de puntuación o números).

+ Ignora las mayúsculas y minúsculas.
