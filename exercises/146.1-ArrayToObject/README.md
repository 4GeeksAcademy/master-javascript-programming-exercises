# `146.1` ArrayToObject

## 📝 Instructions:

1. Write a function called `transformFirstAndLast` that takes in an array, and returns an object with: 

+ the first element of the array as the object's key, and 

+ the last element of the array as that key's value.

 Example input:

 ```Js
['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
```

Function's return value (output):

```Js
{
  Queen : 'Beyonce'
}
```

 Do not change the input array. Assume all elements in the input array will be of type 'string'.

Note that the input array may have a varying number of elements. Your code should flexibly accommodate that.

E.g. it should handle input like:

```js
['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey']
```

Function's return value (output):

```Js
{
  Kevin : 'Spacey'
}
```