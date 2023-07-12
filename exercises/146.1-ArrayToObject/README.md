# `146.1` ArrayToObject

## 📝 Instructions:

1. Write a function called `transformFirstAndLast` that takes in an array, and returns an object with **the first element of the array as the object's key**, and **the last element of the array as that key's value**.

## 📎 Example 1:

```js
let output = transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'])
console.log(output); // --> { Queen: "Beyonce" }
```

## 📎 Example 2:

```js
let output = transformFirstAndLast(['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey'])
console.log(output); // --> { Kevin: "Spacey" }
```

## 💡 Hints:

+ Do not change the input array. 

+ Assume all elements in the input array will be of type `string`.

+ Note that the input array may have a varying number of elements. Your code should flexibly accommodate that.
