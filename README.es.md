<!-- hide -->
<div align="center">

# Domina Javascript Practicando

[![Tutorial certificado](https://img.shields.io/badge/4Geeks-tutorial%20certificado-2563eb)](https://4geeks.com/es/interactive-exercise/master-javascript-exercises-es)
[![Autocorregido con LearnPack](https://img.shields.io/badge/LearnPack-162%20ejercicios%20autocorregidos-2563eb)](https://learnpack.co)
[![Abrir en GitHub Codespaces](https://img.shields.io/badge/Abrir%20en-GitHub%20Codespaces-fb5a1f?logo=github)](https://codespaces.new/?repo=4GeeksAcademy/master-javascript-programming-exercises)

*Estas instrucciones también están disponibles en [inglés](https://github.com/4GeeksAcademy/master-javascript-programming-exercises/blob/HEAD/README.md).*

</div>
<!-- endhide -->

Domina Javascript Practicando es un tutorial interactivo con 162 ejercicios de JavaScript autocorregidos, más una página de bienvenida. Cada ejercicio trae su batería de tests con Jest —988 casos de prueba en total, una media de 6 por ejercicio— y su solución de referencia. Declara 50 horas de trabajo y va desde un `isOldEnoughToDrink` de una línea hasta una búsqueda binaria, el palíndromo más largo de una frase y un formateador de teléfonos con prototipos.

<!-- hide -->
## 📋 Ficha del tutorial

- **Dificultad**: declarada como `easy` en [learn.json](https://github.com/4GeeksAcademy/master-javascript-programming-exercises/blob/HEAD/learn.json), aunque la curva es larga: el ejercicio 001 devuelve `age >= 21` y el 154 pide encontrar el palíndromo más largo dentro de una frase.
- **Duración**: 50 horas (`"duration": 50` en learn.json).
- **Ejercicios**: 163 carpetas dentro de [`exercises/`](https://github.com/4GeeksAcademy/master-javascript-programming-exercises/tree/HEAD/exercises) — 1 página de bienvenida y 162 ejercicios numerados del 001 al 155, sin huecos (algunos números se dividen en `142.1`, `143.2`, `155.4`, etc.).
- **Corrección automática**: sí, `"graded": true` y `"grading": "isolated"`. Los 162 ejercicios de código traen un `test.js` con Jest, 988 casos de prueba en total.
- **Tecnologías**: JavaScript puro sobre Node.js 22, Jest 29.7.0 y el módulo `rewire`, orquestado por LearnPack 5.0.348 con el plugin `@learnpack/node` 1.1.15.
- **Soluciones en vídeo**: no hay (`"videoSolutions": false`), pero los 162 ejercicios de código incluyen un fichero oculto con la solución de referencia.
- **Instrucciones disponibles en**: [español](https://github.com/4GeeksAcademy/master-javascript-programming-exercises/blob/HEAD/README.es.md) e [inglés](https://github.com/4GeeksAcademy/master-javascript-programming-exercises/blob/HEAD/README.md) — las 163 carpetas tienen su `README.md` y su `README.es.md`.
<!-- endhide -->

## 🎯 ¿Qué vas a aprender?

Los ejercicios están ordenados de forma que cada bloque reutiliza el anterior. Contando sobre las 162 soluciones de referencia:

- **Escribir funciones que devuelven, no que imprimen.** Casi todos los ejercicios son «declara una función que, dado X, retorne Y»; una docena te piden modificar el objeto que recibes. En ningún caso se corrige lo que imprimes por consola.
- **Booleanos y operadores**: `>`, `<`, `===`, `%`, `&&`, `||` y la negación, en el bloque 001–028 (`isEven`, `isOdd`, `areBothOdd`, `isEitherEven`, `isEvenAndGreaterThanTen`).
- **Objetos literales**: leer una clave, añadir otra y borrarla. El operador `delete` aparece en 9 soluciones de referencia y `hasOwnProperty` en 2.
- **El objeto `Math`**: `Math.PI`, `Math.pow`, `Math.sqrt`, `Math.abs`, `Math.floor`, `Math.min` y `Math.max` salen en 9 soluciones de referencia: cinco en el bloque de círculos y potencias 042–046, y el resto en `findMinLengthOfThreeWords`, `findMaxLengthOfThreeWords`, `multiply` y la búsqueda binaria.
- **Métodos de array**: contando llamadas en las soluciones de referencia, `push` aparece 19 veces, `map` 13, `filter` 10, `slice` 9, `split` 7, `join` 5 y `forEach` 5, además de `shift`, `unshift`, `pop`, `splice`, `concat`, `reverse`, `reduce` y `Array.isArray` (17).
- **Todas las formas de iterar**: 22 soluciones usan el `for` clásico con contador, 19 usan `for...of`, 12 usan `for...in` y 3 usan `while`. En 24 aparecen funciones flecha, así que puedes comparar los dos estilos sobre el mismo tipo de problema.
- **Datos anidados**: objetos cuyos valores son arrays (ejercicios 092–110) y arrays de objetos que a su vez contienen arrays de objetos (los cuatro ejercicios `155-FashionInventory`).
- **Comprobación de tipos**: `typeof` aparece en 11 soluciones: para filtrar por tipo los valores de un objeto en el bloque 067–075, y para quedarse solo con los textos o solo con los números de un array que mezcla ambos en los ejercicios 124–127.
- **Algoritmos clásicos**: búsqueda binaria, detección de palíndromos, rotación de cadenas, isogramas, detección del valor atípico y búsqueda del par que suma un objetivo (ejercicios 148–154).
- **Objetos con prototipos**: el ejercicio 153 te entrega una función constructora con seis métodos en su `prototype` —dos ya escritos— y te pide rellenar los otros cuatro.

Hay cosas que quedan fuera a propósito. En los 649 ficheros del repositorio (`README.md`, `app.js`, `test.js` y soluciones) no aparece ni una sola `class` de ES6, ni `async`, ni `await`, ni `Promise`, ni `fetch`, ni `document.`, ni `.sort()`. Esto es práctica de lenguaje puro: sin DOM, sin navegador y sin red.

## 👀 ¿Qué vas a construir?

162 funciones pequeñas, cada una en su carpeta numerada y con su fichero de tests. Los bloques:

**001–049 — condicionales, cadenas y aritmética (49 ejercicios).** `checkAge('Adrian', 21)` tiene que devolver exactamente `'Welcome, Adrian!'` y `checkAge('Adrian', 20)`, exactamente `'Go home, Adrian!'`. Después llegan `getFullName`, `isSameLength`, `computeAverageLengthOfWords` y el bloque de geometría: área y perímetro de rectángulos, triángulos y círculos, `computePower`, `computeSquareRoot` y `doubleSquareRootOf`.

**050–091 — arrays, cadenas y cirugía de objetos (42 ejercicios).** Obtener el elemento n-ésimo, el primero y el último; `getElementsAfter` y `getElementsUpTo`; y las parejas de ejercicios que te obligan a distinguir entre modificar y copiar (`removeFromFront` frente a `removeFromFrontOfNew`, `addToBack` frente a `addToBackOfNew`). `extend` copia las propiedades del segundo objeto en el primero *sin* pisar las claves que ya existen, y ocho ejercicios `remove…` borran propiedades según su tipo o su valor. También `countCharacter`, `getAllLetters`, `getAllWords`, `convertDoubleSpaceToSingle` y `keep([1, 2, 3, 2, 1], 2)`, que devuelve `[2, 2]`.

**092–127 — datos anidados y algoritmos sobre arrays completos (36 ejercicios).** Dieciocho ejercicios entran en un objeto para trabajar con el array guardado en una de sus claves: `getAverageOfElementsAtProperty`, `getSquaredElementsAtProperty`, `getProductOfAllElementsAtProperty`. `select(['a', 'c', 'e'], {a: 1, b: 2, c: 3, d: 4})` tiene que devolver `{ a: 1, c: 3 }` e ignorar las claves que no estén en los dos sitios. Después vienen `countAllCharacters`, `joinArrayOfArrays` sobre una matriz y cuatro ejercicios con arrays que mezclan textos *y* números, donde hay que filtrar por tipo antes de comparar.

**128–141 — números y razonamiento (14 ejercicios).** `calculateBillTotal(20)` tiene que devolver exactamente `24.9` (9,5 % de impuestos y 15 % de propina, cada uno aplicado sobre el importe original). `computeCompoundInterest(1500, 0.043, 4, 6)` tiene que devolver `438.83682213410543`, sin redondear. `convertScoreToGrade(104)` tiene que devolver `'INVALID SCORE'`. Y luego el factorial, la suma de dígitos y el trío que te prohíbe el operador que usarías por instinto: `modulo`, `isOddWithoutModulo` e `isEvenWithoutModulo`.

**142.1–143.3 — cambios de forma (6 ejercicios).** `transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'])` devuelve `{ Queen: 'Beyonce' }`. `transformEmployeeData` convierte un array de pares clave/valor en un array de objetos, y `convertObjectToList` hace el camino inverso.

**144–155.4 — el bloque duro (15 ejercicios).** `flipEveryNChars('a short example', 5)` devuelve `'ohs axe trelpma'`. `detectOutlierValue('2 4 7 8 10')` devuelve `3`, la posición (empezando en 1) del único número impar. `findPairForSum([3, 34, 4, 12, 5, 2], 9)` devuelve `[4, 5]`. `search([1, 3, 16, 22, 31, 33, 34], 31)` devuelve `4` con búsqueda binaria, y `null` cuando el valor no está. `isIsogram('Cactus')` devuelve `false`. `PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]).render()` devuelve `'(650) 835-9172'`. `findLongestPalindrome('My dad is a racecar athlete')` devuelve `'a racecar a'`. Y los cuatro ejercicios del catálogo de moda recorren un array de diseñadores, cada uno con su array de zapatos, para producir una matriz, un precio medio por diseñador, una matriz filtrada y un informe con índices de palabras.

## 🎓 ¿Qué necesitas saber antes de empezar?

No necesitas instalar nada si abres el repositorio en GitHub Codespaces: el contenedor de desarrollo levanta Node.js 22, Jest y el plugin de LearnPack para Node por su cuenta.

Lo que sí necesitas es JavaScript previo. La página de bienvenida lo dice sin rodeos: esta es la última tanda de una serie, y te remite a las tres anteriores.

- [JavaScript para principiantes](https://github.com/4GeeksAcademy/javascript-beginner-exercises-tutorial) — variables, tipos, condicionales.
- [Arreglos](https://github.com/4GeeksAcademy/javascript-arrays-exercises-tutorial) — índices y bucles sobre listas.
- [Funciones](https://github.com/4GeeksAcademy/javascript-functions-exercises-tutorial) — parámetros, `return`, ámbito.

Si ya sabes declarar una función y recorrer un array, puedes empezar aquí directamente. El ejercicio 001 sigue siendo una sola comparación, así que la entrada es suave aunque el final no lo sea.

## ✅ ¿Cómo funciona la corrección automática?

Cada carpeta de ejercicio incluye un `test.js` escrito con Jest. La batería nunca lee lo que tu fichero imprime: usa [`rewire`](https://github.com/jhnns/rewire) para meterse dentro de `app.js` y sacar tu función por su nombre, así:

```js
const rewire = require('rewire');
const keep = rewire('./app.js').__get__('keep');
```

A partir de ahí, cada bloque `test()` llama a tu función y examina el valor que devuelve. Una batería típica tiene entre cuatro y seis comprobaciones que van subiendo de nivel: que la función existe, que devuelve algo, que devuelve el tipo correcto y, por último, dos o tres casos reales. Las baterías más cortas tienen 3 comprobaciones —el ejercicio 006 es uno de los ocho que se quedan ahí— y la más larga es la del 153, con 18, que recorre los seis métodos del prototipo antes de comprobar la cadena final.

La corrección es `"isolated"`, así que cada ejercicio se evalúa por separado y un fallo nunca bloquea al siguiente.

> 💡 Dos de los 162 ejercicios corrigen varias funciones a la vez: `128-averageIntegers` extrae `sum` y `average`, y `154-longestPalindrome` extrae `reverseString`, `isPalindrome` y `findLongestPalindrome`. Si dejas vacía cualquiera de las funciones del esqueleto, la batería falla aunque tu función principal sea correcta.

## 💡 ¿Qué errores conviene evitar?

- **Imprimir en lugar de retornar.** 100 de los 162 ficheros `app.js` terminan con una línea `console.log(...)` de ejemplo. Esa línea está ahí para que veas tu resultado mientras trabajas, pero los tests nunca leen la salida por consola. `keep([1, 2, 3, 2, 1], 2)` tiene que *devolver* `[2, 2]`.
- **Cambiar el nombre de la función, o fiarte del nombre de la carpeta.** `rewire(...).__get__('nombre')` falla en seco si el nombre no coincide, y en 20 carpetas el nombre de la carpeta no es el de la función. `012-isLessThanThirty` pide `isLessThan30`; `096-getElementsLessThanOneHundredAtProperty` pide `getElementsLessThan100AtProperty`; `123-joinArraysOfArrays` pide `joinArrayOfArrays` (en singular); `134-convertScoreToGradeWithPlus` pide `convertScoreToGradeWithPlusAndMinus`; `152-isogram` pide `isIsogram`; y `154-longestPalindrome` pide `findLongestPalindrome`. Saca siempre el nombre de las instrucciones o del esqueleto de `app.js`.
- **Devolver una copia cuando el test mira el original.** Doce baterías comprueban el objeto que recibiste, no la copia que construyas: `030`, `031`, `037`, `066`, `067`, `068`, `069`, `070`, `072`, `073`, `074` y `075`. Esos ejercicios hay que resolverlos modificando el objeto in situ. Diez de ellos ni siquiera miran lo que retornas; el `030` y el `037` sí lo miran, así que en esos dos tienes que modificar *y* devolver el objeto.
- **Tirar de `Object.assign` en el ejercicio 066.** `extend` no puede pisar una clave que el primer objeto ya tenga: con `{a: 74, b: 22}` y `{b: 2227, c: 91}`, el resultado esperado es `{a: 74, b: 22, c: 91}`, conservando `b: 22`.
- **Redondear el dinero.** `calculateBillTotal(20)` se compara con `toBe(24.9)` y `calculateBillTotal(36)` con `toBe(44.82)`, así que aplica cada porcentaje por separado sobre el importe original y no redondees. Lo mismo en el 137, donde el valor esperado arrastra los 14 decimales de `438.83682213410543`.
- **Quedarte a un carácter del texto exacto.** `convertScoreToGrade` devuelve `'INVALID SCORE'` en mayúsculas para cualquier nota fuera de 0–100. `greetCustomer('Joe')` tiene que devolver `"Welcome back, Joe! We're glad you liked us the first time!"` con apóstrofo recto, y `greetCustomer('Carl')` —un nombre que no está en `customerData`— tiene que devolver `'Welcome! Is this your first time?'`.
- **Ordenar antes de buscar en el ejercicio 149.** Se espera que `findPairForSum` recorra el array de izquierda a derecha: con `[3, 34, 4, 12, 5, 2]` y objetivo 9 la respuesta es `[4, 5]`, pero si añades un `6` al final la respuesta pasa a ser `[3, 6]`, porque el 3 encuentra pareja antes en el recorrido.
- **Dar por bueno el enunciado del 154.** Sus instrucciones prometen «solo letras», pero el segundo caso de prueba es `"Madam, i'm adam"` y la respuesta esperada es `'Madam'`, con la M mayúscula intacta. Compara ignorando mayúsculas, pero devuelve el fragmento tal y como aparece en la cadena original.
- **Ignorar las funciones auxiliares que te dan.** Los ejercicios 128, 153 y 154 traen un esqueleto con varias funciones y los tests las comprueban todas por separado.

## ❓ Preguntas frecuentes

### ¿Cuánto se tarda en terminar estos ejercicios de JavaScript?

El `learn.json` declara 50 horas. Repartidas entre 162 ejercicios salen unos 18 minutos de media, pero el reparto real es muy desigual: los primeros cincuenta son de una línea y se despachan en dos o tres minutos, mientras que un solo ejercicio del bloque 148–155 puede llevarte una hora.

### ¿Hace falta saber JavaScript antes de empezar?

Sí, lo básico. La página de bienvenida deja claro que esta es la última tanda de una serie y enlaza los tutoriales de principiantes, arrays y funciones que van antes. Lo que no hace falta es saber programación orientada a objetos: el 153 es el único ejercicio con función constructora y viene con el esqueleto ya escrito.

### ¿Cuántos ejercicios se corrigen solos de verdad?

Los 162 ejercicios de código, con 988 casos de prueba de Jest y 1.009 aserciones en total. La única carpeta sin tests es `00-Welcome`, que es la página de introducción y no un ejercicio. Además, 109 de las 163 carpetas incluyen sección de pistas y 161 traen un ejemplo resuelto con la salida esperada.

### ¿Tengo que instalar algo en mi ordenador?

No. Abrir el repositorio en Codespaces te da un contenedor listo con Node.js 22, Jest 29.7.0 y LearnPack ya instalados. La instalación local también es posible y está documentada más abajo, por si prefieres trabajar en tu propia máquina.

### ¿Hay soluciones con las que comparar mi respuesta?

Sí, aunque no en vídeo: `learn.json` deja `videoSolutions` en `false`. Lo que sí hay es un fichero oculto con la solución de referencia junto al `app.js` de cada uno de los 162 ejercicios. Léelo *después* de resolverlo: un mismo problema suele tener varias soluciones válidas y la de referencia es solo una de ellas.

### ¿Sigue mereciendo la pena practicar tantas funciones pequeñas?

Estos 162 problemas entrenan justo lo que aparece en cualquier revisión de código: decidir si conviene modificar o copiar, elegir entre `map`, `filter` y `reduce`, recorrer una estructura anidada sin perder de vista en qué nivel estás y cumplir un contrato de retorno al pie de la letra. Lo que este paquete no cubre es JavaScript asíncrono, el DOM ni los módulos, así que para eso tendrás que buscar otro tutorial.

<!-- hide -->
## 🚀 Cómo empezar

Lo más rápido es un clic: [abre este tutorial en GitHub Codespaces](https://codespaces.new/?repo=4GeeksAcademy/master-javascript-programming-exercises). También existe la alternativa de [Gitpod](https://gitpod.io#https://github.com/4GeeksAcademy/master-javascript-programming-exercises).

Cuando se abra VS Code, los ejercicios de LearnPack deberían arrancar solos. Si no lo hacen, ejecuta esto en la terminal:

```bash
learnpack start
```

## 💻 Instalación local

**Paso 1.** Instala LearnPack, el plugin de Node y Jest, con las mismas versiones que usa el contenedor de desarrollo:

```bash
npm i @learnpack/learnpack@5.0.348 -g && learnpack plugins:install @learnpack/node@1.1.15
npm i jest@29.7.0 jest-environment-jsdom@29.7.0 -g
```

**Paso 2.** Clona el repositorio y entra en él:

```bash
git clone https://github.com/4GeeksAcademy/master-javascript-programming-exercises.git
cd master-javascript-programming-exercises
```

**Paso 3.** Arranca el tutorial desde la misma carpeta donde está `learn.json`:

```bash
learnpack start
```

## 📚 Cómo están organizados los ejercicios

Cada ejercicio es una carpeta dentro de `exercises/` y contiene estos ficheros:

- `app.js` — el fichero que editas y el que ejecuta el ordenador. Está en los 162 ejercicios de código.
- `README.md` — las instrucciones, en inglés.
- `README.es.md` — las mismas instrucciones en español. Está en las 163 carpetas.
- `test.js` — la batería de Jest. No hace falta que la abras. Está en los 162 ejercicios de código.
- Un fichero oculto con la solución. Está en los 162 ejercicios de código, con el nombre `solution.hide.js` en todos salvo en `011-isGreaterThanTen`, donde se llama `solutions.hide.js`.

La carpeta `00-Welcome` solo tiene los dos READMEs: es la página de introducción, no un ejercicio.

¿Has encontrado un error o una errata? Abre un issue en [este repositorio](https://github.com/4GeeksAcademy/master-javascript-programming-exercises/issues) — los ejercicios se construyeron entre mucha gente y los avisos se agradecen.

## 🤝 Colaboradores

El tutorial lo arrancó [Alejandro Sanchez (alesanchezr)](https://github.com/alesanchezr), y estas son las personas con más commits en el repositorio a día de hoy:

- [Jose Mora (josemoracard)](https://github.com/josemoracard) — 1.196 commits
- [Tomas Gonzalez (tommygonzaleza)](https://github.com/tommygonzaleza) — 367 commits
- [Martín Suárez (kiddopro)](https://github.com/kiddopro) — 110 commits
- [Elvira Quiroz (ElviraQDP)](https://github.com/ElviraQDP) — 105 commits
- [Alejandro Sanchez (alesanchezr)](https://github.com/alesanchezr) — 96 commits
- [Ernesto Gonzalez (UmiKami)](https://github.com/UmiKami) — 43 commits
- [Paolo Lucano (plucodev)](https://github.com/plucodev) — 39 commits

Y [todas las demás personas del gráfico de contribuciones](https://github.com/4GeeksAcademy/master-javascript-programming-exercises/graphs/contributors). Este proyecto sigue la especificación [all-contributors](https://github.com/kentcdodds/all-contributors) ([leyenda de emojis](https://github.com/kentcdodds/all-contributors#emoji-key)) y cualquier tipo de contribución es bienvenida.

Este tutorial es uno de tantos construidos por estudiantes y profesores de [4Geeks Academy](https://4geeks.com).
<!-- endhide -->
