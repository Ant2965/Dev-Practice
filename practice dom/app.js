let para=document.createElement('p');
para.innerText='Hello i am red';
document.querySelector('body').append(para);




let h3 =document.createElement('h3');
h3.innerText='i am blue';
h3.style.color='blue';

document.querySelector('body').append(h3);


let div = document.createElement('div')
let h1 = document.createElement('h1')
let pa=document.createElement('p')

h1.innerText='hi i am inner div'
pa.innerText='mee tooo'

div.append(h1)
div.append(pa)

div.style.border='1px solid black'
div.style.backgroundColor='pink'

document.querySelector('body').append(div)


let bt=document.createElement('button');
let input=document.createElement('input')
bt.innerText="click me";
input.innerText="he"

//bt.setAttribute('placeholder')
document.querySelector('body').prepend(bt);
document.querySelector('body').prepend(input);
bt.setAttribute("id","bt");
input.setAttribute("placeholder","username")

document.querySelector('#bt').style.backgroundColor='blue'
document.querySelector('#bt').style.color='white'




