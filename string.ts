var str:string="sakshi Bisht"
var str1:string="Hello How are You?"
var str2:string="Hello How are You?"
var str3:string="Hello How are You?"


var age:number=30
var userName2:string="Sakshi Bisht"
var info:string=`Username is ${userName2} and age is ${age}`
console.log(info)
var boolData=true
var data2:string=boolData.toString();//1 method to convert to string
//2-method
var data2 :string= " "+boolData;
console.log(typeof(data2))
var data3:boolean=true;
var other:boolean
other=data3
console.log(other)

var info1=true
//Type Inference-it will automatically assign 
//info1 as boolean if assigned other value it will 
//give error
//var info1="Sakshi Bisht"
