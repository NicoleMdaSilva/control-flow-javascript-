const prompt=require('prompt-sync')()

const num = parseInt(prompt('Number: '));

if(num % 2 == 0){

    console.log('The number is even');
    const numEven = parseInt(Math.sqrt(num, 2));
    console.log(`The square root is ${numEven}`)

}
else if(num % 2 != 0){

    console.log('The number is odd');
    const numOdd = parseInt(Math.sqrt(num, 3));
    console.log(`The cubic root is ${numOdd}`)

}

