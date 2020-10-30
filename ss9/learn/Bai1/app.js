
let count = 0;

let plus = document.getElementById("plus");

let number = document.getElementById("number")
plus.onclick = function(){
    count = count+1;
    number.innerText = count;
};

let minus = document.getElementById("minus")
minus.onclick = function(){
    count = count - 1;
    number.innerText = count;
};

