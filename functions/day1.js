const nMultiply = (...args) => {
  let multiply = 1;
  for (let i = 0; i < args.length; i++) {
    multiply = multiply * args[i];
  }
  return multiply;
};

console.log(nMultiply(10, 40));
console.log(nMultiply(10, 40, 3716458));
console.log(nMultiply(10, 40, 234123, 412, 34, 1234, 1234, 23, 4123, 4));

const nAdd = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === 'number' && !Number.isNaN(args[i])) {
      sum += args[i];
    }
  }
  return sum;
};
console.log(nAdd(100, 490, 'ankit', 50, null, 490, '30', 50, '', false, NaN));
