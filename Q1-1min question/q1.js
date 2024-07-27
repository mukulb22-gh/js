/*
Question : What is the output of below code and explain why?
*/

const a = [1,2,3,4];
const b = a;
const c = b;

a.push(5);

console.log(a);
console.log(b);
console.log(c);
