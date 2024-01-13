let arr =[1,2,3,4,5];

 let print =function(el){

     console.log(el);

 }


arr.forEach(function(el){
    console.log(el);
})



let obj=[
    {name:'an',
    marks:78},
{name:'avni',
marks:87},
{name:'dhruv',
marks:98}
]

obj.forEach((student)=>{
    console.log(student.marks)
})




// MAP


let num =[1,2,3,4,5,6];


let double = num.map((el)=>{
    return el*2;
});


let gpa = obj.map((el)=>{
    return el.marks/10;
})

