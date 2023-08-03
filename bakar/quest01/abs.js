function isPositive(number) {
    return number >= 0 ? true : false
}

function abs(number) {
    return isPositive(number) ? number : -number;
}

console.log(abs(0))