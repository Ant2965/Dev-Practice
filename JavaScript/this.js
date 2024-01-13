const stu ={
    name:5,
    class:6,
    school:34,

    getAvg(){
        console.log(this);
        let av=(this.name+this.class+this.school)/3;
        console.log(`${this.name} got avg marks = ${av}`);
    }
}



// try catch



console.log("hello");
try{
console.log(a);
}

catch(err){
    console.log("Error caught a is not defined")

    console.log(err)
}

console.log("chalra huun");