"use strict";
function loopFunction() {
    while (true) {
        console.log("loopFunction");
    }
}
loopFunction(); //never ending loop
function simple1() {
    throw new Error("data not found");
}
simple1();
