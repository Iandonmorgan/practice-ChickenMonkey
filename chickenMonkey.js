console.log("PRACTICE: CHICKEN MONKEY");


for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 2, and check if the remainder is 0
        if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("ChickenMonkey"); // ChickenMonkey will appear for numbers evenly divisible by 5 and 7 (i.e. 35 = ChickenMonkey)
    } else if (currentNumber % 5 === 0) {
        console.log("Chicken"); // Chicken will appear for numbers evenly divisible by 5 (i.e. 5 = Chicken)
    } else if (currentNumber % 7 === 0) {
        console.log("Monkey"); // Monkey will appear for numbers evenly divisible by 7 (i.e. 7 = Monkey)
    } else {
        console.log(currentNumber); // Numbers not evenly divisible by 5 or 7 will appear (i.e. 1 = 1)
    }
}