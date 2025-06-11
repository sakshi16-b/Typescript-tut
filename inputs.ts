function getInfo(){
    console.log("get info calling")
    let nameInput=document.getElementById('username') as HTMLInputElement
    let name:string=nameInput.value
    let ageInput=document.getElementById('age') as HTMLInputElement
    let age:string=ageInput.value
    let emailInput=document.getElementById('email') as HTMLInputElement
    let email:string=emailInput.value
    
    console.log(name,age,email)

}