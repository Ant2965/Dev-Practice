

let url="http://universities.hipolabs.com/search?name=middle&country="
let input=document.querySelector("input").value
const print=()=>{
    
}

async function getfact(country){
    try{
    let res= await axios.get(url+country);
    console.log(res);
    }
    catch(err){
        console.log(err);
    }
}
getfact();