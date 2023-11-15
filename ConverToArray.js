function digit(n) {
    return n.toString().split("").map((m) => Number(m)).reverse();
}
console.log(digit(582));