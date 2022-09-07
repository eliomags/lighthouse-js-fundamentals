const isEven  = function (num) {
  return num % 2 === 0;
}
//isEven takes as its parameter a number and returns a Boolean value representing whether or not the number is even.

const isEven  = function (num) {
  return num % 2 === 0;
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);

//simplified version 
const isEven  = function (num) {
  return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(11));

//In this exercise, we learned how to use functions to reduce duplication in code. We also looked at the difference between calling console.log within our functions and calling return within our functions and console.loging the return value.

