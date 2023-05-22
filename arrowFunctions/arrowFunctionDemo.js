let sum = function(a, b){return a+b;};
console.log(sum(1,2));

console.log("Using arrow functions- add(a,b)");

//There is no need to put a return statement in arrow statement
let add = (a,b) => a+b;
console.log(add(1,2));

//const age =17;

let welcome = a => a>=18?"Welcome":"Not Welcome";

console.log(welcome(17));

let sub = (a,b) => {return a-b;};
console.log(sub(8,5))

let addOrSub = (a,b) => {return (a>b ? a-b : b-a)};
console.log(addOrSub(8,9));
console.log(addOrSub(9,8));
