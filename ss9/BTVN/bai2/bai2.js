let btn = document.getElementById("btn");

btn.onclick = function(){
    setTimeout( alertFunc, 1000);
};

function alertFunc(){
    alert("Hello!!!")
};