//If, else ì, else (câu điều kiện rẽ nhánh)

// if(condition 1) {
//     //do something
// } else if(condition 2){
//     //do something 1
// } else if(condition 3){
//     //do something 2
// } else{
//     //do something else
// }

//Bolean (true/false)

// let state = true;
// let single = false;

// // Mệnh đề so sánh 
// // == so sánh bẳng, != so sánh khác
// // ===, !== (so sánh cả giá trị và kiểu dữ liệu)
// // >, <, >=, <=


// console.log(1 != "1" || 2<3);

//&& (and), || (or)

//Ex1


// let tuoi = prompt("Pls input your age: ")

// if(tuoi<18){
//     console.log("You can not ...")
// } else if(tuoi>18 && tuoi<21) {
//     console.log("Khong duoc uong ruou")
// } else {
//     console.log("Uong ruoi thoai mai")
// }

//Ex2

// let chieuCao = Number(prompt("Chieu cao cua may(m): "))
// let canNang = Number(prompt("Can nang cua may(kg): "))

// let bmi = canNang/(chieuCao*chieuCao)


// console.log(bmi);

// if(bmi<18,5) {
//     console.log("Can nang thap")
// } else if(bmi>=18,5 && bmi<=24,9) {
//     console.log("Binh thuong")
// } else {
//     console.log("Thua can")
// }

//Ex3 

// let a= Number(prompt("so thu nhat la"))
// let b= Number(prompt("so thu hai la"))
// let c= Number(prompt("so thu ba la"))

// if(a>b && a>c) {
//     console.log(`So lon nhat la ${a}`)
// } else if(a>b && a<c){
//     console.log(`So lon nhat la ${c}`)
//     }
//     else if(a<b && a<c){
//         console.log(`So lon nhat la ${c}`)
//         }
// else{
//     console.log(`So lon nhat la ${b}`)
// }

