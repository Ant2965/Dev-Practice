let si = document.getElementsByClassName("oldImg");

for(let i=0;i<si.length;i++){
    console.dir(si[i]);
}

// changing the attributes
let img = document.querySelector('img')
img.getAttribute('id')
//'mainImg'
img.getAttribute('src')
//'assets/spiderman_img.png'
img.setAttribute('id','antman')
//undefined
img.id
//'//antman'


let links= document.querySelectorAll('.box a');

for(let i =0;i<links.length;i++){
    links[i].style.color='purple'
}

for(link of links){
    link.style.backgroundColor='red';
}


let c = document.querySelector('img')


c.classList.add='anttt'
//'anttt'
c.classList
//DOMTokenList ['ant,antt', add: 'anttt', value: 'ant,antt']
c.classList
//DOMTokenList ['ant,antt', add: 'anttt', value: 'ant,antt']
c.classList.add='newclass'
//'newclass'
c.classList
//DOMTokenList ['ant,antt', add: 'newclass', value: 'ant,antt']
c.classList.add=('newclass')
//'newclass'
c.classList
//DOMTokenList ['ant,antt', add: 'newclass', value: 'ant,antt']

console.log(c.classList )



let head=document.querySelector("h1")
//undefined
head.classList
//DOMTokenList [value: '']
head.cla
//undefined
head.classList.add("green")
//undefined
head.cla
//undefined
head.classList
//DOMTokenList ['green', value: 'green']
head.classList.remove("green")
//undefined
head.classList
//DOMTokenList [value: '']
head.setAttribute('class' , 'green')
//ndefined//
console.log(head.classList)



let h4 = document.querySelector('h4');
//undefined
h4
//<//h4>​Publication Info​</h4>​
h4.parentElement
//<div class=​"box">​…​</div>​
h4.children
//HTMLCollection []length: 0[[Prototype]]: HTMLCollection
h4.nextElementSibling
//<ul>​…​</ul>​
let box =document.querySelector('.box')
//undefined
//box.children
//HTMLCollection(2) [h4, ul]
//box.childElementCount
//2
h4.childElementCount
//0
box.nextElementSibling
//<h2>​Creation & Development​</h2>​
//box.previousElementSibling
//<p>​…​</p>​
//ul//

console.log(`this is the next element sibling ${box.nextElementSibling}`)