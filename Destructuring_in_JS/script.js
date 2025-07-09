//Destructuring in javascript



const numbers = [1,2,3,4];

const [first,second,third, fourth] = numbers
console.log(first);
console.log(numbers[0])

// swap variables

let a = 1;
let b = 2;

[a,b] = [b,a];

console.log(a,b);

// object Destructuring

const {name,age} = {name:'manisha', age:'39'};

console.log(name);


//Destructuring in Function Parameters

function greet(userObj){
 console.log(`Hello, ${userObj.name} is your age is ${userObj.age}`);
}


const myuser = {
    name:"John",
    age:30,
}
greet(myuser);



function greet(name,age){
 console.log(`Hello, ${name} is your age is ${age}`);
}


const myuser1 = {
    name:"John",
    age:30,
}
greet(myuser1);


// Nested Destructuring

const userData = {
    id : 1,
    info:{
        name:"manisha",
        age:10,
    },
}

console.log(userData.info.name);


 const {id,info:{name1,age1}} = {
    id : 1,
    info:{
        name:"manisha",
        age:10,
    },
}

console.log(age);
console.log(userData.info.name);