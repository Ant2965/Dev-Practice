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