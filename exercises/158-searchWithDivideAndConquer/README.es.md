# `158` search with Divide and Conquer

## 📝 Instrucciones

La búsqueda binaria es una técnica para buscar muy rápidamente una colección ordenada al reducir el espacio de búsqueda a la mitad en cada pasada.

Dado un arreglo ortdenado, como este:
```js
[1, 3, 16, 22, 31, 33, 34]
```
Puedes buscar el valor 31, de la siguiente manera:

1) Elige el punto medio: 22.
2) El valor es superior a 22, así que ahora considera solo la mitad derecha del arreglo anterior:
[...31, 33, 34]
3) Elige el punto medio: 33
4) El valor es inferior a 33, por lo que ahora considere solo la mitad izquierda del arreglo anterior:
[...31...]
5) Elige el punto medio: 31
6) Has alcanzado el valor.
7) Devuelve el índice del valor.

Notas:
* Si no encuentra el valor, puede devolver nulo.
* Si en algún momento calcula el índice del punto medio y obtiene un número fraccionario, simplemente redondee hacia abajo ("piso").

ejemplo : 
```Js
var arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); --> 4
```