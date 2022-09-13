const prompt=require('prompt-sync')()

const num1 = parseFloat(prompt('Type number 1: '));
const num2 = parseFloat(prompt('Type number 2: '));
const num3 = parseFloat(prompt('Type number 3: '));

if (num1 > num2 && num1 > num3){

    console.log(`The biggest number is ${num1}`);
    
}

else if(num2 > num1 && num2 > num3){

    console.log(`the biggest number is ${num2}`);

}

else if(num3 > num1 && num3 > num1){

    console.log(`the biggest number is ${num3}`);

}

