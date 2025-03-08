// Random function five number between 0-1
const flipCoin = () => {
    return Math.random() < 0.5 ? "Heads" : "Tails";  // return the result -> Like if small than 0.5 heads else tails
};

console.log(flipCoin());
