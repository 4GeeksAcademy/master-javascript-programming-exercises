# `111` getElementOfArrayProperty

## 📝 Instructions:

1. Write a function called `getElementOfArrayProperty`.

The `getElementOfArrayProperty` function receives three parameters, `(obj , key , index)`, this function returns the value of an array element found in the property (`key`) of the given object (`obj`) through its index (`index`).

## :bulb: Hint:

* If the array is empty, it should return `undefined`.

* If the given index is out of range of the array located at the given key, it should return `undefined`.

* If the property at the given key is not an array, it should return `undefined`.

* If there is no property at the key, it should return `undefined`.

```Js
var obj = {
 key: ['Jamil', 'Albrey']
};
var output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
```

* In the previous example we are saying that we want to know the value that contains the `index` 0 in the property called `key`, property that is located inside the object `obj`.