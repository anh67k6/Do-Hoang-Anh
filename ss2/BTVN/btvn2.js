
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