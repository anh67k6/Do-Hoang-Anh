let arrUser = [];


while(true){
    let input = prompt("Nhập các chữ cái C R U D E");

    if (input === "C" || input === "c"){

    let newContact = {};

    let ten = prompt("Tên")
    let tuoi = prompt("Tuổi")

    newContact.age = tuoi;
    newContact.name = ten;
    arrUser.push(newContact);

    }

    else if (input === "R"|| input ==="r"){
        console.log(arrUser);
        }

    else if (input === "E"|| input ==="e"){
        break;
    }

    else {
        alert("Try again");
    }
}
