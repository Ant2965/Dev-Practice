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

///           FILTERR   FUNCTION


let nums=[1,2,3,4,5,6,7,8,9,0];
let ans =nums.filter((el)=>{
    return el%2==0;
})


//   EVERY METHOD

// returns only teue and false      Logic AND operator

let arrr=[2,4,6,8,67].every((el)=>{
    return el%2==0;
})



//    SOME FUNCTION    Logical OR operator


// REDUCE FUNCTION


let nom = [1,2,3,45,1];

let finalvalue = nom.reduce((res,el)=>{

    console.log(res);
    return res+el;
});

console.log(finalvalue)




let max=[1,23,3,44,54,65,6,56,433443,344,3,5,45,45,34,,54,4,4343,5,6,66];

let maxi= -1;

for(let i=0;i<max.length;i++){
    if(max[i]>maxi){
        maxi=max[i];
    }
}
console.log(maxi);

let maxie=max.reduce((maxi,el)=>{
    if(maxi<el){
        return el;

    }
    else{
        return maxi;
    }
    console.log(maxi)
})


let sumo = function(a,b){
    console.log(a+b);
}


sumo(43,3);

let aba = (a,b)=>{
    return a+b;
}



// EVERY 


let avni = [2,4,6,8,10,11];

// let b=avni.some((el)=>{
//     return el%2==0;
// })


// let summ=avni.reduce((acc,el)=>{
//     return acc+el;

// })


let doub=avni.map((el)=>{
    return el*2;
})



let mini=[23,4,4,5,5,5,6,7,8,9,8,7,4,32,11];
console.log(Math.min(...mini));












