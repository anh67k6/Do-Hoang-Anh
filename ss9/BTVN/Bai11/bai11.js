let btn = document.getElementById("btn");
let text = document.getElementById("input")
let result = document.getElementById("results")
btn.onclick = function(){
    let div = document.createElement("div");
    div.innerText = text.value.toUpperCase();
    result.appendChild(div);
    console.log(text.value.toUpperCase());
    text.value="";
}