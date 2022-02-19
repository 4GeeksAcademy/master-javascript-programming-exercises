# `157` phoneNumber

## 📝 Instructions:

1. Accept an array of numbers that represent a phone number.

## Example input:

```js
[6, 5, 0, 8, 3, 5, 9, 1, 7, 2]
```

## Example output:

```js
Return as a string in this format: `(650) 835-9172`.
```

## 💡 Hints:

+ Do not leave any methods unused.

+  This is an example of a poor implementation:

 ```Js
function renderPhoneNumber(numbers){
  return '(' + numbers[0] + numbers[1] + numbers[2] + ') '
    + numbers[3] + numbers[4] + numbers[5] + '-' 
    + numbers[6] + numbers[7] + numbers[8] + numbers[9];
}
```

+ What you should do instead is read the object-oriented skeleton. After you understand the flow of processing that it sketches out, fill in the implementation.