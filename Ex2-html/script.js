const num1 = prompt('n1°: ');
const num2 = prompt('n2°: ');
const num3 = prompt('n3°: ');

if(num1 > num2 && num2 > num3){
    ("\nPrimeiro: " + num1)
    document.write("\nSegundo: " + num2)
    document.write("\nTerceiro: " + num3)
}
else if(num1 > num3 && num3 > num2){
    document.write("\nPrimeiro: " + num1)
    document.write("\nSegundo: "+ num3)
    document.write("\nTerceiro: " + num2)
}
else if(num2 > num1 && num1 > num3){
    document.write("\nPrimeiro: " + num2)
    document.write("\nSegundo: " + num1)
    document.write("\nTerceiro: "  + num3)
}
else if(num2 > num3 && num3 > num1){
    document.write("\nPrimeiro: " + num2)
    document.write("\nSegundo: " + num3)
    document.write("\nTerceiro: " + num2)
}
else if(num3 > num1 && num1 > num2){
    document.write("\nPrimeiro: " + num3)
    document.write("\nSegundo: "+ num1)
    document.write("\nTerceiro: " + num2)
}
else if(num3 > num2 && num2 > num1){
    document.write("\nPrimeiro: " + num3)
    document.write("\nSegundo: "+ num2)
    document.write("\nTerceiro: " + num1)

}
