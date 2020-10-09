// //Bai 1
// let a = Number(prompt("Nhap vao so N: "));
// let tongLe = 0;
// let tongChan = 0;

// for(i=1;i<=a;i++){
//     if(i%2==0){
//         tongChan += i;
//     }
//     else {
//         tongLe +=i;
//     }
// }
// console.log(`Tong cac so le la ${tongLe}`);
// console.log(`Tong cac so chan la ${tongChan}`);


// //Bai 2
// let a = Number(prompt("Nhap so muon check"))

// if(a === 1) {
//     console.log("Khong phai so nguyen to")
// }
// else if (a === 2) {
//     console.log("So nguyen to")
// }
// else {
//     for(let x=2; x<a; x++){
//         if(a%x === 0){
//             console.log("Khong phai so nguyen to");
//                 break;
//         }
//         else {
//             console.log("So nguyen to")
//         }
//     }

// }


//Bai 3

let a = Number(prompt("Nhap so muon check"))
function snt(a){
    for(let i=2; i<=a;i++){
        if(a%i === 0){
            return false;
        } 
        else {
            return true;
        }
    }
}

if(a>=2){
    console.log("2");
    for(let x=3;x<=a; x++) {
        if(snt(x)=== true){
            console.log(x);
        }
    }
}
else {
    console.log("a");
}