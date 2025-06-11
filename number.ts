var num1:number=10;
var num2:number=20;
var total=(num1+num2)
console.log(total)

//var item1:number=00001

var oct:number=0o100001
var hexa:number=0b00001
var binary:number=0x00001
console.log(oct+hexa);
var item:number=100
var item2="40"
console.log(item+item2)
var item2Converted=Number(item2)
//Method 1 to convert string to number
console.log(item+item2Converted)
//method 2
console.log(item+ +item2)

//Type Inference
//var data=30//on hover it will tell its type is number
//data="sakshi"//it will give error b/c above we have declared it as number

var datanum:number | string=30
datanum="sakshi";
datanum=40;
//it will not show error b/c we have defined datatype both as number and string

