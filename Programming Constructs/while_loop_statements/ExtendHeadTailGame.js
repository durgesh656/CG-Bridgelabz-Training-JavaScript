

let headsCount = 0;
let tailsCount = 0;

while (headsCount < 11 && tailsCount < 11) {
    let flip = Math.random() < 0.5 ? "Heads" : "Tails";

    if (flip === "Heads") {
        headsCount++;
    } else {
        tailsCount++;
    }

    console.log(`Flip: result -> ${flip}, Score-> Heads: ${headsCount}, Tails: ${tailsCount}`);
}

console.log(`${headsCount === 11 ? "Heads" : "Tails"} wins the game!`);
