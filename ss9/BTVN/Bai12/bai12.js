let items = ["Backack","MiBand Watch","Ring"];

//12.1
// console.log(items);

//12.3

let ul = document.getElementById("ulo");
// console.log(ul);

//12.4

// for(let i=0;i<3;i++){
//     let li = document.createElement("li");
//     li.innerText = items[i];
//     ul.appendChild(li);
// }

//12.5 
let text = document.getElementById("input");
let btn = document.getElementById("btn");

// console.log(text);
// console.log(btn);

//12.8

// btn.onclick = function(){
//     let a = text.value;
//     console.log(a);
// }

//12.9

btn.onclick = function(){
    let a = text.value;
    items.push(a);
}

//12.11
for(let i=0;i<items.length;i++){
    let li = document.createElement("li");
    let del = document.createElement("button");
    li.innerText = items[i];
    del.innerText = "X";
    ul.appendChild(li);
    li.appendChild(del);
    del.onclick = function(){
    del.parentElement.remove();
    }
}



