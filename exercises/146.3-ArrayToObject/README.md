# `146.3` ArraytoObject-Part-3

## 📝 Instructions:

1. Write a function called `transformEmployeeData` that transforms some employee data from one format to another.

The argument will look something like this:

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
Given that input, the return value should look like this:

```Js
[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]
```
Note that the input may have a different number of rows or different keys than the given sample. 

For example, let's say the HR department adds a `tshirtSize` field to each employee record. Your code should flexibly accommodate that.
