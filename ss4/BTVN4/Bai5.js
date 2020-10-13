let mobile = [
    {
        name : 'Xiaomi',
        price : 428,
        color : 'White',
        category : 'Charger',
        providers : ['Phukienzero', 'Dientucc'],
    },

    {
        name : 'VSmart',
        price : 5487,
        color : 'black',
        category : 'phone',
        providers : ['Tgdd', 'Ddghn', 'Vhsotre'],
    },

    {
        name : 'Iphone X',
        price : 21490,
        color : 'gray',
        category : 'phone',
        providers : 'TGDD',
    },
    
    {
        name : 'Samsung',
        price : 8490,
        color : 'blue',
        category : 'phone',
        providers : 'TGDD',

    }
];

// //5.1
for(let i = 0; i<mobile.length; i++){
    console.log(`#${i+1}. Name: ${mobile[i].name}
Price: ${mobile[i].price}
------------------------`);
};

// //5.2
let position = Number(prompt("Enter number"));1

let a = mobile[position-1];

console.log(a)

//5.3

let cate = prompt("Input somethings")

for(let i = 0; i<mobile.length; i++){
    if (cate === mobile[i].category){
        console.log(`#${i+1}. Name: ${mobile[i].name}
Price: ${mobile[i].price}
------------------------`);
    }
}

//5.4
for(let i = 0; i<mobile.length; i++){
    console.log(`#${i+1}. ${mobile[i].name}
Price: ${mobile[i].price}
Providers: ${mobile[i].providers}`);
}

//5.5

let result =[]
let pro = prompt("Which provider ?")
for (let i = 0; i < mobile.length; i++) {
    if( mobile[i].providers.indexOf(pro) != -1 ) {
        result.push(mobile[i])
    }
}
for(let x of result) {
    console.log(`Name : ${x.name}`)
    console.log(`Price : ${x.price}`)
    console.log(`Color : ${x.color}`)
    console.log(`Category : ${x.category}`)
    console.log(`Providers : ${x.providers}`)
    console.log("----------------------------------------")
}

