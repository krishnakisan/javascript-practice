// How to create new element using JavaScript and using append
const heading = document.createElement("h1");
heading.innerHTML = "Created New Element";

const lenArr = document.createElement("h2");
lenArr.innerHTML = "How to find out the length of Array ??"

const root = document.getElementById("root");
root.append(heading,lenArr);

// How to write a Array
const arr = ["string", 1, [], {}] // You can take any type

// How to find a length of Array
const arrLength = ["apple","mango","graphes"];
//console.log(arrLength);
//console.log(arrLength.length);

// How to get a value from the Array with the help index
// console.log(arrLength);
// console.log(arrLength[0]);
// console.log(arrLength[1]);
// console.log(arrLength[2]);

//How to find out the last element of the Array using at() method
// const lastElement = ["a","b","c","d","e"];
// console.log(lastElement.at(-1));

// How to add a new array using push() method at the last
// Push Method always return the length of the Array
// let data = ["a","b"];
// let dataResult = data.push("c");
// console.log(data);
// console.log(dataResult);

// How to remove last element of the array using pop()method
// Removed last element of the array
// It's return deleted value
// change the origanl array

// let removeLastArr = ["a","b","c","d"];
// let removeResult = removeLastArr.pop();
// console.log(removeLastArr);
// console.log(removeResult);

// Include Method()
// It's helps to checked the passed value is present or not in the array,
// If it's present than it will return true or not return false

// let vowl = ["a","e","i","o","u"];
// let vowlResult = vowl.includes("a");
// console.log(vowl);
// console.log(vowlResult);

//indexof()method
let vowl = ["a","e","i","o","u"];
let vowlResult = vowl.indexOf("a");
console.log(vowl);
console.log(vowlResult);
 








