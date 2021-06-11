const input = require('readline-sync');
//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.


let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let  vegitables = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let drinks = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let snacks = ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];

//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.
//The meals must include one item from each of the source arrays.
//Each ingredient can only be used ONCE.
//Print out each meal.

//console.log(protein);
//console.log(grains);
//console.log(vegitables);
//console.log(drinks);
//console.log(snacks);



for (let i = 0; i < 6; i++) {
  let meal = [protein[i], grains[i], vegitables[i], drinks[i], snacks[i]];
  console.log(meal);
}


//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.



let numMeals = input.question("Please select the number of meals to assemble.");


while (numMeals < 0 || numMeals > 6 || isNaN(numMeals)) {
  numMeals = input.question("Invalid input. Pease try again:");
}

let string1 = 'Rutabagas';
let string2 = 'Chemistry';
let code = '';

for (let i = 0; i < string1.length; i++) {
  code+=string1[i]+string2[i];

console.log(code);
}


//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.

for (let i = 0; i < numMeals; i = i + 1) {
  console.log("This meal includes: "+protein[i]+", "+grains[i]+", "+vegitables[i]+", "+drinks[i]+", and "+snacks[i]);
  if (vegitables[i] === "kale" || snacks[i] === "more kale") {
    console.log("Don’t worry! You can have chocolate tomorrow.");
  }
}


// b. Use an “array of arrays” to store the food options in a ‘pantry’.
let pantry = [protein, grains, vegitables, drinks, snacks];
for (let i = 0; i < numMeals; i++) {
  meal = [];
  for (let j = 0; j < pantry.length; j++)
  meal.push(pantry[j][i]);
  console.log(meal);
  if (meal.includes('kale') || meal.includes('more kale')) {
    console.log("Don’t worry! You can have chocolate tomorrow!");
  }
}



// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”

