function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  let string = '';
  // your code here
  this.getAreaCode();
  this.getExchangeCode();
  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  // your code here
  console.log(this.numbers);
  let areaCode = this.numbers.join('').slice(0, 3);
  console.log(areaCode);
  return areaCode;
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  // your code here
  console.log(this.numbers);
  let exchandeCode = this.numbers.join('').slice(3, 6);
  console.log(exchandeCode);
  return exchandeCode;
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  // your code here
  
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};

let number = new PhoneNumberFormatter([6,5,0,8,3,5,9,1,7,2]);
console.log(number.render()); // --> "(650) 835-9172"
