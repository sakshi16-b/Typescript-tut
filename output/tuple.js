"use strict";
var emp = ['Sam', 'Peter', 'Bruce'];
var empData = ['Sam', 30, true];
// var empData:[string,number,boolean]=['Sam',30,true,1000]//it will give 
//error b/c we have assign more element than defined
//Suppose we needs to add  salary of emp
empData.push(100000); //it will not give any err.
console.log(empData);
