function brickCalculator(storeyOfBuilding) {
    let totalBrickOfFirstTenStorey;
    let totalBrickOfSecondTenStorey;
    let totalBrickOfRestStorey;
    const brick = 1000;
    const perHeightOfFirstTenStorey = 15;
    const perHeightOfSecondTenStorey = 12;
    const perHeightOfRestStorey = 10;
    if (storeyOfBuilding <= 0) {
        return ("Negative or null value is not accepted");
    } else if (storeyOfBuilding >= 1 && storeyOfBuilding <= 10) {
        totalBrickOfFirstTenStorey = storeyOfBuilding * perHeightOfFirstTenStorey * brick;
        return Math.round(totalBrickOfFirstTenStorey);
    } else if (storeyOfBuilding > 10 && storeyOfBuilding <= 20) {
        totalBrickOfSecondTenStorey = (storeyOfBuilding * perHeightOfSecondTenStorey * brick) + (3 * 10 * brick);
        return Math.round(totalBrickOfSecondTenStorey);
    } else {
        totalBrickOfRestStorey = (storeyOfBuilding * perHeightOfRestStorey * brick) + ((2 * 10 * brick) + (5 * 10 * brick));
        return Math.round(totalBrickOfRestStorey);
    }
}
console.log(brickCalculator(0));