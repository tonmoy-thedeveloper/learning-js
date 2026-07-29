let numbers = [23, 12, 44, 555, 566, 33, 345, 1223, 1420, 22, 444, 23];
let largest = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log(largest);
let smallest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
}
console.log(smallest);
