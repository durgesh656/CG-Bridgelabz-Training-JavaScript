const convertTemperature = (choice, temp) => {
    switch (choice) {
        case "CtoF":
            console.log(`${temp}°C = ${(temp * 9 / 5 + 32).toFixed(2)}°F`);
            break;

        case "FtoC":
            console.log(`${temp}°F = ${((temp - 32) * 5 / 9).toFixed(2)}°C`);
            break;

        default:
            console.log("Invalid choice! Use 'CtoF' or 'FtoC'.");
    }
};

convertTemperature("CtoF", 25); 
convertTemperature("FtoC", 77); 
