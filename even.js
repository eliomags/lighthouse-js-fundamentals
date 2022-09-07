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
