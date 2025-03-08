// Function to genrate the three digit random number 
const generateThreeDigitNumber = () => {
    return Math.floor(Math.random() * 900) + 100;
}


let randomArray = [];
// Function to store random values in the array
const storeRandomValuesInArray = () => {
    let index = 0;

    for (let i = 0; i < 10; i++) {
        randomArray[index++] = generateThreeDigitNumber();
    }
    return randomArray;
}



let resultArr = storeRandomValuesInArray();
resultArr.sort();
console.log(randomArray);

console.log(resultArr[8] + " is the second largest element");
console.log(resultArr[1] + " is the second smallest element");
