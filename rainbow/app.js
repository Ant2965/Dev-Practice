let b1=document.querySelector('.v');//c
let b2=document.querySelector('.i');//h
let b3=document.querySelector('.b');//a
let b4=document.querySelector('.g');//u
let b5=document.querySelector('.y');//h
let b6=document.querySelector('.o');//a
let b7=document.querySelector('.r');//n




// b1.onclick=()=>{
//     document.querySelector("body").style.backgroundColor='purple'
// }

b2.onclick=()=>{
    document.querySelector("body").style.backgroundColor='indigo'
}

b3.onclick=()=>{
    document.querySelector("body").style.backgroundColor='blue'
}

b4.onclick=()=>{
    document.querySelector("body").style.backgroundColor='green'
}

b5.onclick=()=>{
    document.querySelector("body").style.backgroundColor='yellow'
}

b6.onclick=()=>{
    document.querySelector("body").style.backgroundColor='orange'
}

b7.onclick=()=>{
    document.querySelector("body").style.backgroundColor='red'
}



let a=1;
b1.addEventListener("click",()=>{
    if(a===1){
    document.querySelector("body").style.backgroundColor='yellow'
        a=2;
    }
    else{
    document.querySelector("body").style.backgroundColor='red'
       a=1;
    }
})

let bo=document.createElement("button")
document.querySelector("bo")

bo.addEventListener("click",()=>{

    let h3 = document.querySelector("h3")
    h3.innerText= col;
    console.log("gene random color")
});

let col= ()=>{
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color = `${red},${green},${blue}`;

    return color;
}