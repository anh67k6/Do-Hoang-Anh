// Bai 4
let items = [`Jean`, `T-shirts`, `Socks`]
while(true){
    let a = prompt("Điều bạn muốn làm: ")

    if(a === "c"|| a === "C"){
        let newItems = prompt("Tên của new item: ");
        alert("Done");
        items.push(newItems);
    }

    else if(a === "r"|| a === "R"){
        console.log("Item bây giờ là: ");
        for(i=0; i <items.length; i++){
            console.log(`${i+1}. ${items[i]}`);
        }
    }

    else if(a === "u" || a === "U"){
        let stt = Number(prompt("Vị trí muốn thay đổi: "));
        let newName = prompt("Tên mới là: ");
        List[stt -1] = newName;
    }

    else if(a === "d" || a === "D"){
        let stt = Number(prompt("Vị trí muốn xóa"));
        alert("done");
        items.splice(stt -1, 1);
    }
    else {
        alert("Không hỉu");
       
    }
}