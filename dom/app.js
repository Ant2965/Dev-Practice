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

console.log(c.classList)