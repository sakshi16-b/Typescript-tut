"use strict";
var studentData; //union type for single variable
studentData = "sakshi";
studentData = 30;
studentData = [];
function fruitData() {
    var item = 2;
    if (item > 1) {
        return ["apple", "mango"];
    }
    else {
        return "Apple";
    }
}
//console.log(fruitData())
function studentInfo(data1) {
    //union type
    if (typeof data1 == "string") {
        return "student name is " + data1;
    }
    if (typeof data1 == "number") {
        return "student age is " + data1;
    }
}
console.log(studentInfo("sakshi"));
console.log(studentInfo(30));
// studentInfo(true)
