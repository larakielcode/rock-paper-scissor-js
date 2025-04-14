function getComputerChoice() {
    return Math.random();
}

function getHumanChoice() {
    return Math.random();
}

console.log(parseFloat(getComputerChoice().toFixed(3)));
console.log(parseFloat(getHumanChoice().toFixed(3)));