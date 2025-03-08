// Getting the sum of the dice using random 
const getRandomDiceNumberSum = ()=>{
    let num1 = Math.floor(Math.random() * 6) + 1;
    let num2 = Math.floor(Math.random() * 6) + 1;
    return num1 + num2;
}

console.log(getRandomDiceNumberSum());



