"use strict";
// var sym =Symbol();
// var sym2=Symbol();
// console.log(sym==sym2)
// var sym3 =Symbol('abc');
// var sym4=Symbol('abc');
// console.log(sym3==sym4)
const uId = Symbol('id');
const obj = {
    uId: 100, //unique id
    name: 'Sakshi Bisht'
};
console.log(obj.uId);
console.log(obj.name);
console.log(typeof (null));
