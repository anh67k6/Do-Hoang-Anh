//STUDY
//1. what is Boolean? A JavaScript Boolean represents one of two values: true or false.
//3 example : 1==3, 1==="1", 1>=3

//2. What is flowchart 
// A flowchart is a visual representation of a process in which each step in the process is represented by a different shape and contains a short description of the process step

//Ex1
let nang = Number(prompt("Cân nặng của bạn (kg): "));
let cao = Number(prompt("Chiều cao của bạn (cm): "));

let caoM = cao/100

let bmi = nang/(caoM*caoM)

if(bmi<16) {
    console.log("Severely underweigh");
} else if(bmi<18.5) {
    console.log("Underweight");
} else if(bmi<25){
    console.log("Normal");
} else if(bmi<30){
    console.log("Overweight");
} else{
    console.log("Obese");
}

//Ex2

let a = Number(prompt("Nhập số: "));
let i = 1;
let tich = 1;

if(a === 0 || a===1){
    console.log("1");
}
else if(a<0){
    console.log("Khong the nhap so am");
}
else{
    while(i<=a){
    tich *= i ;
    i=i+1;
}
console.log(tich);
}

//TurtleJs
//Hình số 1
// lt(30)
// fd(100)
// rt(60)
// fd(100)
// rt(120)
// fd(100)
// rt(60)
// fd(100)
// fd(100)
// lt(60)
// fd(100)
// lt(120)
// fd(100)
// lt(60)
// fd(100)
// lt(30)
// fd(100)
// lt(60)
// fd(100)
// lt(120)
// fd(100)
// lt(60)
// fd(100)
// fd(100)
// rt(60)
// fd(100)
// rt(120)
// fd(100)
// rt(60)
// fd(100)

// //Hình số 2
// rt(30)
// fd(100)
// rt(120)
// fd(100)
// rt(120)
// fd(100)
// rt(120)
// lt(30)
// fd(100)
// rt(90)
// fd(100)
// rt(90)
// fd(100)
// rt(90)
// fd(100)
// rt(90)
// lt(18)
// fd(100)
// rt(72)
// fd(100)
// rt(72)
// fd(100)
// rt(72)
// fd(100)
// rt(72)
// fd(100)
// rt(72) 
// lt(12)
// fd(100)
// rt(60)
// fd(100)
// rt(60)
// fd(100)
// rt(60)
// fd(100)
// rt(60)
// fd(100)
// rt(60)
// fd(100)
// rt(60)

