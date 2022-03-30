# `157` phoneNumber

## 📝 Instructions:

1. Use the skeleton and modify the functions in order to format the numbers in the following format: `(000) 000-0000`

## Example:

```js
let output = PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]).rnder();
console.log(output); // "(650) 835-9172"
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
