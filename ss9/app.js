const add = document.getElementById("add-container");

const todo = document.getElementById("todo");

const list = document.getElementById("todo-container")



add.onclick = function(){
    let a = todo.value;
    let li = document.createElement("li");
    li.innerText = a;
    console.log(li);
    let ul = document.getElementById("todo-container")
    ul.appendChild(li);
    todo.value="";
}

// const mainForm = document.getElementById("main-form");

// mainForm.onsubmit = function(event){
//     event.preventDefault();
//     let a = mainForm.todo.value;
//     let li = document.createElement("li");
//     li.innerText = a;
    
//     let btn = document.createElement("button")
//     btn.innerText = "X";
//     li.appendChild(btn)
//     btn.onclick = function (){
//         li.parentNode.removeChild(li);
//     }
//     let ul = document.getElementById("todo-container")
//     ul.appendChild(li);
//     todo.value="";
// }

//append 1 cái nút button xóa vào li 


// let li = <li>${todoContent}<button>Delete</button></li>;
//  ul.innerHTML += li;
//  mainForm.todo.value = "";

// }

// ul.onclick = function(event){
//     if (event.target.classList.contains("delete-btn")){
//         event.target.parentElement.remove();
//     }
// }
