// Ex7:
let array = [1,4,9,10,15,99];
let a = prompt("Please enter a number you want to check");
if( a === array){
    let b = array.indexOf(a);
    console.log(`${a} is found in my array at index ${b}`);
}else {
    console.log(`${a} is not found in my array.`);
}
