
## Question : What is the output of below code and explain why?


const a = [1,2,3,4];

const b = a;

const c = b;

a.push(5);

console.log(a);

console.log(b);

console.log(c);

## Output

console.log(a); //[1,2,3,4,5]

console.log(b); //[1,2,3,4,5]

console.log(c); //[1,2,3,4,5]


## Explanation

In JavaScript, arrays are passed by reference. 

This means that when you assign an array to another variable (like b = a and c = b), 

you are not creating a copy of the array, but rather creating a new reference to the same array in memory.
