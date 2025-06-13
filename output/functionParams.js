"use strict";
// function totalPrice(){
//     var price=100
//     var item=50
//  console.log(price*item)
// }
//totalPrice()//we want to pass item 
// and price as parameter.
function totalPrice(price, item, text) {
    //if we dont pass text as an argument then we can make it
    //optional using ? like above
    if (text)
        console.log(text += price * item);
    else {
        console.log(price * item);
    }
}
totalPrice(100, 50, "Total Price is ");
totalPrice(100, 50);
// function simple(data:string|number|boolean){
//     console.log(data)
//}
function simple(data) {
    console.log(data);
}
simple("sakshi");
simple(1000);
simple(true);
