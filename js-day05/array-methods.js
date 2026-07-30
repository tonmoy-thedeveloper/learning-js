// First we will learn Fucking slice() method

// let fruits = ["Apple", "Banana", "Lichi", "Kiwi", "Orange"];
// let result = fruits.slice(1, 3);
// console.log(result);
// console.log(fruits.slice());
// console.log(fruits.slice(1));
// console.log(fruits.slice(4));

// // Task 1
// let colors = ["Red", "Green", "Blue", "Yellow"];
// console.log(colors.slice(1, 3));

// // Task 2
// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers.slice(2));

// // Task 3
// let names = ["Tom", "Alex", "Sara", "John"];
// let copyNames = names.slice();
// console.log(copyNames);

// // Learning splice()
// let movies = ["Inglorious Bastard", "Mask", "Social Network", "Zombie"];
// // let spliceArray = movies.splice(1, 2);
// // console.log(spliceArray);
// // console.log(movies);
// // movies.splice(1, 2, "The Godfather");
// // console.log(movies);
// let spliceArray = movies.splice(1, 1, "Good Man");
// console.log(spliceArray);
// console.log(movies);

// Task 1
// let colors = ["Red", "Green", "Blue", "Yellow"];
// let removesColor = colors.splice(1, 2);
// console.log(colors);

// // Task 2
// let numbers = [10, 30, 40];
// let insertNum = numbers.splice(1, 0, 20);
// console.log(numbers);

// // Task 3
// let cities = ["Dhaka", "Tokyo", "London"];
// let insetAndReplace = cities.splice(1, 1, "Paris");
// console.log(cities);

// // Task 4
// let fruits = ["Apple", "Banana", "Orange"];
// let removes = fruits.splice(1, 1);
// console.log(removes);
// console.log(fruits);

// Learning join()
// let fruits = ["Apple", "Banana", "Orange"];
// let convertToString = fruits.join(" ");
// console.log(fruits.join());
// console.log(fruits.join(", "));
// console.log(fruits.join(" "));
// console.log(fruits.join(" | "));
// console.log(fruits.join("-"));
// console.log(typeof convertToString);
// console.log(fruits);

// Learning split()
// let text = "Apple,Banana,Orange";
// let splitString = text.split();
// console.log(splitString, typeof splitString, Array.isArray(splitString));
// console.log(text, typeof text);
// console.log(text.split(""));
// let love = "I love JavaScript";
// console.log(love.split("i"));

// Task 1
// let colors = ["Red", "Green", "Blue"];
// let joinColors = colors.join(" | ");
// console.log(joinColors);

// // Task 2
// let text = "HTML,CSS,JavaScript,React";
// console.log(text.split(","));

// // Task 3
// let sentence = "I want to become a Web Developer";
// console.log(sentence.split(" "));

// // Task 4
// let word = "Programming";
// console.log(word.split(""));

//  Learning concat()
// let frontend = ["HTML", "CSS"];
// let backend = ["Node.js", "Express"];

// let fullstack = frontend.concat(backend);
// console.log(fullstack);

// let a = [1, 2];
// let b = [3, 4];
// let c = [5, 6];
// let combineArray = a.concat(b, c);
// console.log(combineArray);

// // Add individual value
// let numbers = [1, 2];
// let addValue = numbers.concat(3, 5);
// console.log(addValue);

// // Mix values

// let result = numbers.concat([33, 55, 55], addValue, 33);
// console.log(result);

// Task 1
let fruits1 = ["Apple", "Banana"];
let fruits2 = ["Orange", "Mango"];

let combineFruits = fruits1.concat(fruits2);
console.log(combineFruits);

// Task 2
let frontend = ["HTML", "CSS"];
let addValue = frontend.concat("JavaScript");
console.log(addValue);
console.log(frontend);

// Task 3
let a = [1, 2];
let b = [3, 4];
let c = [5, 6];

// let result = a.concat(b, c);
// console.log(result);

let arr1 = [1, 2];
let arr2 = [3, 4];

let result = arr1.concat(arr2);

arr1.push(100);

console.log(result);
console.log(arr1);

// Learning reverse() and at()

let arrayOfNum1 = [12, 3, 44, 566, 22, 23];
console.log(arrayOfNum1.reverse());

// Task 1
let colors = ["Red", "Green", "Blue"];
let reverseArray = colors.reverse();

// Tsdk 2
let numbers = [10, 20, 30, 40];
console.log(numbers.at(-1));

// Task 3
let fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log(fruits.at(0));
console.log(fruits.at(-1));
console.log(fruits.at(-2));

let arr = [1, 2, 3];

let reversed = arr.reverse();

reversed.push(100);

console.log(arr);
console.log(reversed);
