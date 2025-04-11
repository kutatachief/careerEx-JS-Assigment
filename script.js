
//Question 1. Create variables to store your name, age, and nationality. Combine them into a sentence that introduces you.

const firstname = "Kingsley"
const surname = "Onah"
const age = "38"
const nationality = "Nigeria"

const introduction = `Hi, my name is ${firstname} ${surname}, I am ${age} years old from ${nationality}`

console.log(introduction);


//Question 2. Make a variable with your favorite quote or lyric. Change the entire text to uppercase and lowercase in separate steps.

const favoriteQuote = "The only limit to our realization of tomorrow is our doubts of today.";
//changing to uppercase
console.log(favoriteQuote.toUpperCase());
//changing to lowercase
console.log(favoriteQuote.toLowerCase());


//Question 3.Take a word and rearrange it in reverse order, then log the reversed word.

//create a variable
const word = "Adventure";
//use split to convert it to an array, then reverse it, then use join to convert back to string
const reverseWord = word.split('').reverse().join('');

console.log(reverseWord);


//Question 4: Store the price of 3 items in 3 different variables. Calculate the total and display it with a message.

const shoe = 50000;
const shirt = 20000;
const trouser = 30000;

//calculate the total
const totalPrice = shoe + shirt + trouser;

console.log("The Total price of the items is $" + totalPrice);




//Question 5.Find the average of 5 test scores stored in variables. Display the average with a message.

//declare the variables using array
const scores = [70, 85, 90, 78, 88];

//calculate the sum
let sum = scores.reduce((acc, curr) => acc + curr, 0);
//reduce(): reduces the array to a single value by applying a function to each element.
//acc = accumulator, keeps track of the total sum
//curr = current, shows current number in array
//0 = the starting value of the accumulator

//calculate the average
let average = sum / scores.length;
console.log("The average score is:", average);






//QUESTION 6: Create an array of your 5 favorite foods. Display the first and last items in the array.

const favoriteFoods = ['Jollof Rice', 'Pasta', 'Pizza', 'Burgers', 'Salad'];

console.log("First favorite food:", favoriteFoods[0]);

console.log("Last favorite food:", favoriteFoods[favoriteFoods.length - 1]);




//Question 7: Add two more food items to the list: one at the beginning and one at the end. Display the new list.

//add to the beginning
favoriteFoods.unshift('ice Cream');

//add to the end
favoriteFoods.push('Fried Rice');

//displaying the new list
console.log('Updated list:', favoriteFoods);




//Create three arrays:
//8.jssOne
//9.jssTwo
//10.jssThree
//Each array must contain 10 student names as string values.


// Array for JSS One students
const jssOne = [
    "John Doe",
    "Jane Smith",
    "Alice Johnson",
    "Michael Brown",
    "Sarah Davis",
    "David Wilson",
    "Emma Taylor",
    "James Anderson",
    "Sophia Thomas",
    "Liam Jackson"
  ];
  
  // Array for JSS Two students
const jssTwo = [
    "Olivia White",
    "Ethan Harris",
    "Ava Martin",
    "Lucas Thompson",
    "Mia Garcia",
    "Noah Martinez",
    "Isabella Robinson",
    "Elijah Clark",
    "Charlotte Lewis",
    "Amelia Walker"
  ];
  
  // Array for JSS Three students
const jssThree = [
    "Benjamin Hall",
    "Sofia Allen",
    "Alexander Young",
    "Mia King",
    "Charlotte Wright",
    "Henry Scott",
    "Grace Green",
    "Samuel Adams",
    "Victoria Baker",
    "Jackson Nelson"
  ];
  
  // Display the arrays
  console.log("JSS One Students:", jssOne);
  console.log("JSS Two Students:", jssTwo);
  console.log("JSS Three Students:", jssThree);
  



  