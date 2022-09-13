const prompt=require('prompt-sync')()

const age = parseInt(prompt('Type your age: '));

if(age <= 14){

    console.log('Childish');

}
else if(age >= 15 && age <= 17){

    console.log('Juvenile');

}else{

    console.log('Adult!!!');

}
