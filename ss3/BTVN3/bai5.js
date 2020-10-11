// bai 5

let a = prompt("Enter a squence of Number, seperated by commas (,)")
    let inputNumber = a.split(",").map(number)
    let sum = 0
    for (i = 0; i < inputNumber.length; i++) {
        sum += inputNumber[i];
    }
    console.log(`Tổng các số nhập vào là : ${sum}`);
