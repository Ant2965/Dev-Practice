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