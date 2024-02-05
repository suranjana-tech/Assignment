// That is how we will defining the type of a variable and assign a value in the variable
let a : string = 'Max';
// or
let x = 'Ryan';
//or
let y:string;
y='Ritu';


// if we place any another values in a it will throw error as we already mentioned a should be a string

// I am showing all other ways to define variables in TS

let b : number;
b=34;

let c : boolean;
c=true;
c=false;

// Suppose we have a variable which can be either string or number
// in this case we should use Union Type. 
// We will define union type with '|' symbol

let d : string | number;
d = 'Merry';
d = 3;

