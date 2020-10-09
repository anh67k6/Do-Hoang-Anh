// Bài 6
let a = prompt("Enter a squence of Number, seperated by commas (,)")
let aNumber = a.split(",").map(Number)
let max = Math.max(...aNumber);
let min = Math.min(...aNumber);
console.log(`Max = ${max}`)
console.log(`Min = ${min}`)