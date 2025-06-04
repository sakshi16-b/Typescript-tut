var num1 = 10;
var num2 = 20;
var total = (num1 + num2);
console.log(total);
//var item1:number=00001
var oct = 32769;
var hexa = 1;
var binary = 0x00001;
console.log(oct + hexa);
var item = 100;
var item2 = "40";
console.log(item + item2);
var item2Converted = Number(item2);
//Method 1 to convert string to number
console.log(item + item2Converted);
//method 2
console.log(item + +item2);
//Type Inference
//var data=30//on hover it will tell its type is number
//data="sakshi"//it will give error b/c above we have declared it as number
var data;
data = "sakshi";
data = 40;
//it will not show error b/c we have defined datatype both as number and string

//SYNTAX
// var var_name:data_type=data_value