
//Bai 2
let a = Number(prompt("Nhap so muon check"))

if(a === 1) {
    console.log("False")
}
else if (a === 2) {
    console.log("True")
}
else {
    for(let x=2; x<a; x++){
        if(a%x === 0){
            console.log("False");
                break;
        }
        else {
            console.log("True")
        }
    }

}