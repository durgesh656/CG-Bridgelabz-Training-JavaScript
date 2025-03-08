const generateTwoDigitRandomValue = ()=>{
    return Math.floor(Math.random() * 90) + 10;
}

let sum = 0;

for (let index = 0; index < 5; index++) {
    sum += generateTwoDigitRandomValue(); 
}

console.log("Sum : " + sum);
console.log("Average : " + sum/5);




