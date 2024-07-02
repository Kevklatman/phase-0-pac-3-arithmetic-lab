function add(a,b){
return a + b
    }
function subtract(a,b){
return a - b
}
function multiply(a,b){
return a * b
}
function divide(a,b){
return a/b
}
function increment(number){
    return number += 1
}
function decrement(number){
    return number -= 1
}
function makeInt(n){
    return parseInt(n, 10)
}console.log(makeInt("5"))

function preserveDecimal(n){
    return parseFloat(n)
}console.log(preserveDecimal("80.123999"))