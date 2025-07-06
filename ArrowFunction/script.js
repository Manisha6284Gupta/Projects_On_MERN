// ---

// arrow function


// basic syntax

// function multiply(a,b){
//     return a * b;
// }

const multiply = (a,b) => {
     a * b;
}

const result = multiply(2,5);

const greet = (name) =>  `Hello.${name}`
const greetFn = greet("Manisha");

//Single parentheses 
const square =  x => x*x;

const squareFn = square(3);

console.log(squareFn);

// Object literal return 

// const getUser = () => {
//     return {
//         name:'Manisha',
//         age:'21'
//     }
// }


const getUser = () =>({
    name:'Manisha',
        age:'21'
})

const getUserFn = getUser();
console.log(getUserFn);

