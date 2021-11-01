# `151` ObjectToArray[Part-3]

## 📝 Instructions:

1. Write a function called `convertObjectToList` that converts a literal object into an array of arryas, like this:

+ Argument:

```Js
{
  name: 'Holly',
  age: 35,
  role: 'producer'
}
```
+ Return value:

```Js
[['name', 'Holly'], ['age', 35], ['role', 'producer']]
```

Note that your function should handle ANY object like that one and not just the given sample.

E.g. Should handle this one or ANY other object containing simple key-values.

```Js
{
  species: 'canine',
  name: 'Bowser',
  weight: 45
}
```