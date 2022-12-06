let name1 ='Himanshu'; //string type
let age=22;  //number type
let female=false; //boolean type

 
// name1= 20    we can't because typescript is strongely typed language

name1='Ramesh';

age=25;

 //Arrow function
 const circ=(diameter: number)=>{
    return diameter * Math.PI;
 }

 console.log(circ(20.1));


