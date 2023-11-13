// odd or even
function evenOdd (value) {
    if (value % 2 === 0) {
        return " value is Even numbre"
    } else {
        return "value is Odd numbre"
    }
}
console.log (evenOdd(1))
// simpler code but same 
// return value % 2 == 0 ? "value is Even" : "Odd"