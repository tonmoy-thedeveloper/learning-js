let numbers = [3, 8, 11, 16, 21, 24, 22, 32, 44, 22, 33, 555];
let count = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    count++;
  }
}
console.log(count);

let marks = [80, 75, 90, 85];
let sum = 0;
for (let i = 0; i < marks.length; i++) {
  sum = sum + marks[i];
}
console.log(sum);
