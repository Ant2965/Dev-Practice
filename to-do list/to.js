let btn = document.querySelector("button")
let ul = document.querySelector("ul")
let input=document.querySelector("input")

btn.addEventListener('click',()=>{
    let item= document.createElement("li")
    let del=document.createElement("button")
    del.innerText="Delete"
    del.classList.add("delete")
    item.innerText=input.value;
    console.log(input.value)
    item.appendChild(del)
    ul.appendChild(item)
    input.value="";
})

ul.addEventListener("click",(event)=>{
    console.log(event.target)
    console.log("button clicked");

    if(event.target.nodeName=='BUTTON'){
        console.log("delete")

        let it=event.target.parentElement;
        it.remove();
    }
})





// let delbtn=document.querySelectorAll(".delete");

// for(del of delbtn){

//     del.addEventListener('click',function(){
//         console.log("delted")

//         let par=this.parentElement;
//         console.log(par)
//         par.remove();
//     })
   
// }