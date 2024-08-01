// 2.Task: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Moby-Dick", author: "Herman Melville", year: 1851 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
];

const getBookTitles = (data) => {
  return data.map((book) => book.title);
};

const titles = getBookTitles(books);
console.log(titles);

// 4.Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  { make: "Toyota", model: "Camry", year: 2018 },
  { make: "Honda", model: "Accord", year: 2020 },
  { make: "Ford", model: "Mustang", year: 2015 },
  { make: "Tesla", model: "Model S", year: 2019 },
];

const sortCarsByYear = (data) => {
  return data.sort((a, b) => a.year - b.year);
};

const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);

// 5.Task: Find and Modify
// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "Diana", age: 40 },
];

const updatePersonAge = (data, personName, newAge) => {
  for (const person of data) {
    if (person.name === personName) {
      person.age = newAge;
    }
  }
};

updatePersonAge(people, "Alice", 26);

console.log(people);

// 8. Task: Unique Values
// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

const numbers = [1, 2, 3, 2, 4, 5, 3, 6, 4, 7, 5];

const getUniqueNumbers = (data) => {
  return [...new Set(data)];
};

const uniqueNumbers = getUniqueNumbers(numbers);

console.log(uniqueNumbers);

// 09. Task: Find Maximum Value:
// Write a function that takes an array of numbers and returns the maximum value.

const numbers2 = [3, 7, 1, 9, 2, 8, 5];

const findMaxValue = (data) => {
  return Math.max(...data);
};

const maxValue = findMaxValue(numbers2);

console.log(maxValue);
