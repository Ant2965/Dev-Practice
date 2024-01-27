let form= document.querySelector("form")


form.addEventListener("submit", ()=>{
    event.preventDefault();
    alert("Form submitted");


//let user=document.querySelector("#user");
let user=this.Element[0];
let pass =this.Element[1];
//let pass=document.querySelector("#password");

console.dir(user.value);
console.log(pass.value);



alert(`Hi ${user.value}, your password is ${pass.value}`);
})