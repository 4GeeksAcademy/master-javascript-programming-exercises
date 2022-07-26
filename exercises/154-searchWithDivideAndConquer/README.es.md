# `154` searchWithDivideAndConquer

Dado un array ordenado, como este:

```js
[1, 3, 16, 22, 31, 33, 34]
```

Puedes buscar el valor `31` con búsqueda binaria, de la siguiente manera:

1. Elige el punto medio (`22`).

2. El valor es superior a `22`, así que ahora consideras solo la mitad derecha del arrat anterior: [...31, 33, 34]

3. Elige el punto medio: `33`.

4. El valor es inferior a `33`, por lo que ahora consideras solo la mitad izquierda del array anterior: [...31...]

5. Elige el punto medio: `31`

6. Has alcanzado el valor.

7. Devuelve el índice del valor.

## 📝 Instrucciones:

1. Dados un array de números y un número, la función `search` debe implementar una búsqueda binaria del número dado en el array y retornar su posición.

## Ejemplo: 

```Js
let arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); --> 4
```

## 💡 Pistas:

+ La **búsqueda binaria o binary search** es una técnica para buscar rápidamente una colección ordenada al reducir el espacio de búsqueda a la mitad en cada pasada.

+ Si no encuentras el valor, puedes devolver `null`.

+ Si en algún momento calculas el índice del punto medio y obtienes una fracción, simplemente redondee hacia abajo.



