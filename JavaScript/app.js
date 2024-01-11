console.log("hello");


let mess = '                              hello                             '

console.log(mess)

mess.trim();

console.log(mess.trim())


let str = ' Random '

console.log(str.toUpperCase())


let a =  '               ilovecosding                              '
console.log(a.slice(1,4))
console.log(a)
console.log(a.indexOf('Love'))

console.log(a.toUpperCase().trim())


/*I will be back again today*/
/*I will be back again today*/
/*I will be back again today*/


/*can be let*/
const  student = 
{name: "Ant",
age: 20,
marks: 94.4,
city: 'delhi'}


let stu=["shra",23,94];


const item ={
    price: 100.99,
    Discount: 50,
    colors:['red','black']
};


const post= {
    username: "ant",
    content: "THis is my bithday post",
    likes: 169,
    repost: 5,
    tags: ["@apnacollege","@delta"]
};


student['name']


const classinfo={
    Ant: {

        grade: "A+",
        city:"Delho"

    },

    Avni:{
        grade: "A+",
        city: "Delho"

    },

    vidhi:{
        grade: "A+",
        city: "Delho"
    }
};

Math.random()*10
let st=Math.random();
Math.floor(Math.random()*10);




const max= prompt("Enter the max number");

const random= Math.floor(Math.random()*max)+1;
console.log(random);

let guess =prompt("Guess the number");


while(true){
    if(guess=="quit"){
    console.log("User quit");
break;
}

if(guess==random){
    console.log("Yya");
    break;

}
else{
    guess=prompt("your guess was wrong");
}
}



function print(){
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}

print();
