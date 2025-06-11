"use strict";
var str = "sakshi Bisht";
var str1 = "Hello How are You?";
var str2 = "Hello How are You?";
var str3 = "Hello How are You?";
var age = 30;
var userName2 = "Sakshi Bisht";
var info = `Username is ${userName2} and age is ${age}`;
console.log(info);
var boolData = true;
var data2 = boolData.toString(); //1 method to convert to string
//2-method
var data2 = " " + boolData;
console.log(typeof (data2));
var data3 = true;
var other;
other = data3;
console.log(other);
var info1 = true;
//Type Inference-it will automatically assign 
//info1 as boolean if assigned other value it will 
//give error
//var info1="Sakshi Bisht"
