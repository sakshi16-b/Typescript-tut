function loopFunction():never{
    while(true){
        console.log("loopFunction")
    }
}
loopFunction();//never ending loop

function simple1():void{
    throw new Error("data not found")
}
simple1()