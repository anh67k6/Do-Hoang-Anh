// //After 7
// let movie = {
//     title : 'The dark night rises',
//     year : '2012',
//     rate : '8.4',
// };
// console.log(movie);

// // //After 9
// let x = prompt('What do you want to know')
// let a = movie[x];

// if (a == null || a == undefined) {
//     alert('x is null or undefined');
// } else {
//    console.log(a);
// };


// // //After 10

// movie.rate = 8.7 ;
// console.log (movie.rate);

// movie.rate = movie.rate + 0.5;
// console.log (movie.rate);

//After 11

// let update = prompt("What do you want to update");
// let a = movie[update];

// if (a == null || a == undefined) {
//     alert('Deo co nhap vao');
//     movie[update] = prompt("dien ten di");
//     console.log(movie);

// }
// else{
//     console.log(movie);
// };

// let a = prompt("update");
// movie[a] = prompt("ten update");

// console.log(movie);

//Array of object

// let movieArr = [
//     {
//         name : 'Attack on Titans',
//         year : 2013, 
//         rate : 8.8 ,
//     },
//     {
//         name : 'My boss my hero',
//         year : 2006,
//         rate : 8.2,
//     },
//     {
//         name : 'My hunter',
//         year : 2017,
//         rate : 8.6,
//     }
// ];



// for (let i = 0; i < movieArr.length; i ++){
//     console.log(`Name : ${movieArr[i].name}`);
//     console.log(`Year : ${movieArr[i].year}`);
//     console.log(`Rate : ${movieArr[i].rate}`);
//     console.log('--------------')
// };

// // movieArr[2].rate = movieArr[2].rate + 0.7;
// console.log(movieArr[2]);


//Object of Array


// let movie = {
//     name : 'Attack on Titans',
//     year : 2013,
//     rate : 8.8,
//     casts : ['Eren'],
// };
// let cats = movie.casts;
// cats.push('Kiro');

// console.log(movie);

