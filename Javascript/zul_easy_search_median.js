// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  input.sort(function (a, b) {
    return a - b;
  });
  if (input.length % 2 == 0) {
    return (input[input.length / 2 - 1] + input[input.length / 2]) / 2;
  } else {
    return input[(input.length - 1) / 2];
  }
}

console.log(result(input));
