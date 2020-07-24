function woodCalculator(numOfChair, numOfTable, numOfBed) {
    let totalWood;
    if (numOfChair <= 0 || numOfTable <= 0 || numOfBed <= 0) {
        return ("Negative or null value is not accepted");
    }
    totalWood = numOfChair * 1 + numOfTable * 3 + numOfBed * 5;
    return Math.round(totalWood);
}
console.log(woodCalculator(0, 2, 2));