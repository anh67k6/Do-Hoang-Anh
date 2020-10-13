 alert('Hi, there is dev dictionary.');
 let dic = {
        debug : 'The process of figuring out why your program has a certain error and how to fix it',
        done : 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
        defect : `The formal word for ‘error’`,
        pm : `The short version of Project Manager, the person in charge of the final result of a project`,
        uiux : `UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels`,
 };
while(true){
 let input = prompt('Enter a keyword');
    let a = dic[input];

 if(a === null || a === undefined ) {
     alert(`We could not find your word: ${input}`);
     let input2 = prompt('Please leave your explanation');
     dic[input] = input2;
     alert('done');
    }
 else{
    console.log(a);
    break;
 }
}   
