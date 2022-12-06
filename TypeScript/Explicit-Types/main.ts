//explicit types 
let character:string;
let age1 : number;
let isloggedIn: boolean;

character="HImanshu";
// character=20;   we can't changed

age1=20;

isloggedIn=true;


//Arrays
let ninjas: string[]=[];

ninjas.push("Postive");

console.log(ninjas);

 
//unions types
let mixed:(string|number|boolean)[]=[];
mixed.push('hello');
mixed.push(20);
mixed.push(false);

console.log(mixed);


//objects

let ninjaone: object;
ninjaone = {name:'Himanshu', age:30};

console.log(ninjaone);

let ninjatwo:{
    name:string;
    age:number;
}

ninjatwo={name:"Himanshu",age:22};
console.log(ninjatwo);

