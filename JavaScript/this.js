const stu = {
    name: 5,
    class: 6,
    school: 34,

    getAvg() {
        console.log(this);
        let av = (this.name + this.class + this.school) / 3;
        console.log(`${this.name} got avg marks = ${av}`);
    }
}



// try catch



console.log("hello");
try {
    console.log(a);
}

catch (err) {
    console.log("Error caught a is not defined")

    console.log(err)
}

console.log("chalra huun");

// ARROW FUNCTION

const arrow = (a, b) => {
    console.log(a + b);
}


arrow(2, 4);

const cube = (c) => {
    console.log(c * c * c);
}

cube(5);

const power = (a, b) => {
    return a ** b;
}

const cube1 = (a, b) => a ** b;


console.log("hello")
for(let i=0;i<5;i++){
setTimeout(()=>{
    console.log("apnacollege")
},4000)
}


console.log("welcome to")

let id=setInterval(()=>{
console.log("Hello i am interval")

},4000)

    // setInterval(() => {
        
    // }, );

    console.log(id);


    clearInterval(id);


    const stud ={
        name:'ant',
        marks: 90,

        prop: this,


        getname: function(){
            return this.name;
        },
    }

    const sq=(a)=>{
        console.log(a*a);
    }

    //n=>(n*n);

    let id3=setInterval(()=>{
        console.log("helll")
    }, 2000);

    setTimeout(()=>{
        clearInterval(id3);
        console.log("clear interval ran")
    },10000);
