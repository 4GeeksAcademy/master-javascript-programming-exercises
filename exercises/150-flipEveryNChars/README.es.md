# `150` flipEveryNChars

## 📝 Instrucciones:

1. Declara una función llamada `flipEveryNChars`.

2. La función acepta 2 parámetros denominados cadena `yn`, cuyos valores serán `string` y `número`.

3. Cuando llames a la función, devuelve un string con cada n de caracteres invertidos, incluidos los espacios.

## Ejemplo:

```Js
var input = 'a short example'; 
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
```

**Desglosando este ejemplo, pieza por pieza:**

```js
'a sho' -> 'ohs a'
'rt ex' -> 'xe tr'
'ample' -> 'elpma'

-> 'ohs axe trelpma'
```