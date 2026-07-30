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
let colors = ["Red", "Green", "Blue"];
let joinColors = colors.join(" | ");
console.log(joinColors);

// Task 2
let text = "HTML,CSS,JavaScript,React";
console.log(text.split(","));

// Task 3
let sentence = "I want to become a Web Developer";
console.log(sentence.split(" "));
// Task 4
let word = "Programming";
console.log(word.split(""));

console.log(colors.join(100));
