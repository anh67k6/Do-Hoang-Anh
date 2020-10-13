let frontEnd = [
    {
        name : 'HTML',
         status : 'false',
    },
    {
        name : 'CSS',
        status : 'false',
    },
    {
        name : 'Basic of Javascript',
        status : 'false',
    },
    {
        name : 'npm',
        status : 'false',
    },
    {
        name : 'git',
        status : 'false',
    },
];

//6.1
// console.log('Hi there, this is your leanring task to front-end developer carrer: ')
// for( let i = 0; i < frontEnd.length; i ++){
//     console.log(`#${i+1}. ${frontEnd[i].name}
// Complete: ${frontEnd[i].status}`);
// }

//6.2
let user = prompt("Enter your command (New, Delete, Update, Complete)");

if (user === 'new'){
    let newTask = prompt('Enter new task: ')
    frontEnd.push(
        {   
            name : newTask,
            stauts : 'false',
        },
    );
    console.log(frontEnd);
}
else if ( user === 'update'){
    let a = Number(prompt('Enter position'));
    frontEnd[a-1].name = prompt('Enter new name: ');
    console.log(frontEnd);
}
else if ( user === 'complete'){
    let b = Number(prompt('Enter position'));
    frontEnd[b-1].status = 'true';
    console.log(frontEnd);
}
else if ( user === 'delete'){
    let c = Number(prompt('Enter position'));
    frontEnd.splice(c-1,1);
    console.log(frontEnd);
}
else{
    console.log('a');
}

