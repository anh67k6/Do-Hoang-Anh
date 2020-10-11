// let arr = [1,2,3,4,5,6,7];
// //map 

// let arr2 = arr.map(function(item, index){
//     return item+1;
// })
// console.log(arr2);
// //filter (lọc)
// //quy định đặt tên biến
// let arr3 = arr.filter(function(item, index){
//     return item >2;
// })
// console.log(arr3);

//Bài 4

//Dùng array miêu tả các thông tin của 1 người

// let person = [`Nam`, 19, `HaNoi`, 25, false];

// console.log(person);



//Init
// let person = {};
// console.log(person);

// let person = {
//     name: 'Nam'
// };

// console.log(person);

// let person = {
//     name : 'Nam ',
//     age : '19',

// };
// console.log(person);

//property , value



//Read: 
// let person = {
//     name : 'Nam',
//     age : 18,
// };

// console.log(person);
// console.log(person.age);

// console.log(person['name']); 

// let a = person['age']



//Update
// person['age'] = 19;
// console.log(person['age']);

// person.age ++; 
// console.log(person.age);

//Create:
// person.location = 'Hanoi'

//Delete
// delete person.age ;

//Combine array and object

// let personArr = [ 
//     {
//         name : 'Nam',
//         age : 18,
//     },
//     {
//         name : 'Duc',
//         age : 24,

//     }

// ];

// console.log(personArr);


// let person = {
//     name : 'Nam',
//     age : 18,
//     favs : ['Netflix', 'Cafe', 'Code'],
// };

// // console.log(person.favs[1]);

// let favs = person.favs;

// console.log(favs);

// for (let i = 0; i < favs.length; i++){
//     console.log(`${i+1}: ${favs[i]}`);
// }

// favs.push('Mac');
// console.log(favs);
