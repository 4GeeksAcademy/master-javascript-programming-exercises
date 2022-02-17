# `146.3` ArraytoObject

## 📝 Instructions:

1. Write a function called `transformEmployeeData` that transforms some employee data from one format to another.

## Example input:

```JS
[
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]
```
## Example output:

```Js
[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]
```

## 💡 Hint:

+ Note that the input may have a different number of rows or different keys than the given sample. For example, let's say the HR department adds a `tshirtSize` field to each employee record. Your code should flexibly accommodate that.
