let arrUser = [];


while(true){
    let input = prompt("Nhập các chữ cái C R U D E");
    
    if (input === "C" || input === "c"){
        let newContact = {};
        let ten = prompt("Tên");
        let tuoi = prompt("Tuổi");

        newContact.age = tuoi;
        newContact.name = ten;
        arrUser.push(newContact);
    }

    else if (input === "R"|| input ==="r"){
        console.log(arrUser);
        // break;
    }

    else if (input === "E"|| input ==="e"){
        break;
    }

    else if (input === 'U'|| input === 'u'){
        let nameSearch = prompt("Tên muốn sửa");

        for (let i = 0; i<arrUser.length; i++){
            if (arrUser[i].name === nameSearch){
                let newAge = prompt("Tuổi mới là:");
                arrUser[i].age = newAge;
            }
        }
    }

    else if (input === 'D' || input === 'd'){
        let nameDelete = prompt("Tên muốn xóa");
        if (arrUser[i].name === nameDelete){
            arrUser.splice(i,1);
        }
    }

    else {
        alert("Try again");
    }
}
