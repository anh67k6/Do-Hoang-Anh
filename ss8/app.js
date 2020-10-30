//function

// function myFunction(){
//     //logic
//     console.log("Hello world!")
//     // return  
// }
// let a = myFunction();
// console.log(a);

//Tính diện tích tam giác biết đường cao và cạnh huyền 

// function calculate(h,a){
//     let s = a *h /2
//     return s 
// }
// let s = calculate(10,20);
// console.log(s);

// //Phương thức (method)


// let person = {
//     name : "Peter",
//     age : 28,
//     sayHello : function(name){
//         console.log(`Hello ${name}`);
//         return this;

//     },
//     introduce : function(){
//         console.log(`Hello, my name is ${this.name}`);
//         return this;
//     }
// }
// person.sayHello("Cường");

//Từ khóa this 

// let randomString = "Hello 123";

// console.log(randomString.toLocaleLowerCase().toLocaleUpperCase());

// person.introduce().sayHello("Cường");

// [1,2,3].map()

//Document object model DOM 


// let app = document.getElementById("app");
// console.log(app);

//window.onload

//class name

//tag name x    

// let app2 = document.getElementsByClassName("app-2");
// console.log(app2);

// let apps = document.getElementsByTagName("div");
// console.log(apps);

// document.querySelector
// document.querySelectorAll

// console.log(app.innerHTML);
// console.log(app.innerText);
// console.log(app.textContent);


// app.style.backgroundColor = "red";  

// let ul = document.getElementById("todo-list");

// console.log(ul.children[0].parentElement);
// console.log(ul.id);

// ul.classList.add("todo-3");

// console.log(ul.classList);





//createElement()
//appendChild(), remove()

// const ul = document.getElementById("todo-list");
// console.log(ul);

// let li = document.createElement("li");
// console.log(li);

// li.innerText="Học bài";      

// console.log(li);

// ul.appendChild(li);

// ul.children[0].remove();

//Click


// let button = document.getElementById("click")


// button.onclick = function (){
//     if(button.style.backgroundColor !== "black"){
//     button.style.backgroundColor = "black";
//     }

//     else {
//         button.style.backgroundColor = "white";
//     }
// }