# `154` searchWithDivideAndConquer

## 📝 Instrucciones:

**Binary search** is a searching technique which works on Divide and Conquer approach. It used to search any element in a sorted array. 

Given a sorted array, such as this:

```js
[1, 3, 16, 22, 31, 33, 34]
```

You can search for the value `31`, as follows:

1. Pick the midpoint: `22`.

2. The value is higher than `22`, so now consider only the right half of the previous array:
[...31, 33, 34]

3. Pick the midpoint: `33`.

4. The value is lower than 33, so now consider only the left half of the previous array:
[...31...]

5. Pick the midpoint: `31`.

6. You've hit the value.

7. Return the index of the value.

## :bulb: Hint:

* If you don't find the value, you can return `null`.

* If at any point you calculate the index of the midpoint and get a fractional number, just round it down ("floor" it).

Example : 

```Js
var arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); --> 4
```