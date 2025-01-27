//reverseString function
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

//CountCharacters functioin
function countCharacters(char) {
  return char.length();
}

console.log(countCharacters("Hello"));

//Capitalize function
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize("hello"));

//Array filter function

function filterArray(arr) {
  let number = typeof arr;
  if (number === "number") {
    return number;
  }
}
filterArray([1, 2, 3, 4, 5, "west", "north"]);

const sumOfArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(sumOfArray([1, 2, 3, 4, 5, 6]));

//Function to check if a number is prime.
const isPrime = (num) => {
  if (num < 2) return "It's not a prime number.";

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return "It's not a prime number.";
    }
  }

  return "It's a prime number.";
};

isPrime(3);

//function to find the factorial of a given number
function factorial(num) {
  if (num < 0) {
    return "Factorial is not defined for negative numbers.";
  }
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));

//function to generate the Fibonacci sequence up to a given number of terms.
function generateFibonacci(terms) {
  if (terms <= 0) return [];
  if (terms === 1) return [0];

  let sequence = [0, 1];
  for (let i = 2; i < terms; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

console.log(generateFibonacci(10));
