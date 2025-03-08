// Function to roll a die and get a number between 1 and 6
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to roll the die until one number reaches the given limit
function rollDiceUntilLimit(limit) {
    let rollResults = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    let maxReached = false;

    while (!maxReached) {
        let roll = rollDie(); 
        rollResults[roll]++; 

        if (rollResults[roll] === limit) { 
            maxReached = true;
        }
    }

    return rollResults;
}

// Function to find the number that appeared the most and the least
function findMinMax(rollResults) {
    let maxNum = null, minNum = null;
    let maxCount = -Infinity, minCount = Infinity;
    
    for (let num in rollResults) {
        if (rollResults[num] > maxCount) { 
            maxCount = rollResults[num];
            maxNum = num;
        }
        if (rollResults[num] < minCount) { 
            minCount = rollResults[num];
            minNum = num;
        }
    }

    return { maxNum, maxCount, minNum, minCount };
}

// Execute the dice rolling process until a number reaches 10 times
const rollResults = rollDiceUntilLimit(10);
const { maxNum, maxCount, minNum, minCount } = findMinMax(rollResults);

// Display the results
console.log("Final Roll Counts:", rollResults);
console.log(`Number that reached 10 times first: ${maxNum} with ${maxCount} rolls`);
console.log(`Number that appeared the least: ${minNum} with ${minCount} rolls`);
