// "ankit" -> String
// {name:'Ankit'} -> Object
// false -> Boolean
// [] -> Array
// null or undefined -> Please enter a valid number
// 100 -> Number

// Write a function to find the data type of an input

function checkDataType(i) {
  let inputValue = '';
  if (
    typeof i === 'boolean' ||
    typeof i === 'object' ||
    typeof i === 'string' ||
    typeof i === 'number' ||
    Array.isArray(i)
  ) {
    inputValue += typeof i;
    return inputValue;
  } else {
    return 'invalid input';
  }
}
console.log(checkDataType(Array.isArray([10])));
console.log(checkDataType('string'));
console.log(checkDataType(false));
console.log(checkDataType({ name: 'ankit' }));
console.log(checkDataType(10));
console.log(checkDataType('10'));
