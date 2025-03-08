// Function to get the 5 random number
let randomValues = [];

for (let index = 0; index < 5; index++) {
    randomValues[index] = Math.floor(Math.random() * 900) + 100;
}

// Calculating the maximum and minimum values from the array
var max = Math.max(...randomValues);
var min = Math.min(...randomValues);


console.log(randomValues);
console.log("Maximum value is: " + max + " Minimum values is: " + min);