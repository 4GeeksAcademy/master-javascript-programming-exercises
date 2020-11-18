# `68` Extend

## 📝 Instructions

Write a function called "extend".

Given 2 objects, "extend" adds the properties of the 2nd object to the first one.

Notes:
* Add any key that is not on the first object.
* If the first object already has the given key, ignore it(don't override the property value). 
* Don't modify the second object.

```Javascript
var obj1 = {
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};


extend(obj1, obj2);


console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}
```