function getTime(): number {
  return new Date().getTime();
}

console.log(getTime());

//Parameters

function multiply(a: number, b: number) {
  return a * b;
}

console.log(multiply(5, 2));

//optional parameter

function add(a: number, b: number,c?:number){
    return a+b+(c||0);
}

console.log(add(2,6));


//Anonymous function

let myAdd=function(x:number,y:number):number{
    return x+y;
}

console.log(myAdd(5,3));


// Rest parameter 

function sum(a:number,...b:number[]):number{
    let result=a;
    for(let i=0;i<b.length;i++){
        result+=b[i];
    }
    return result;
}
let result1=sum(2,4,6);
let result2=sum(3,5,7,9);

console.log(result1+"\n"+result2);
console.log(result1+result2);



