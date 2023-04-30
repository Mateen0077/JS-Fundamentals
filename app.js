// // alert("Hello world"); 
// console.log("hiii");

// let age = 25;
// console.log(age);

// // const salary = 20000;
// let salary = 20000;
// console.log(salary);
// //  you can't change const later (re-asign later)

//  salary = 20;
// // console.log(salary);

// Data types

const name = "Matex";
let language = "Urdu";
const channel = `Traversy Media`;

let pi = 3.1427;

const date = null;

// console.log(res);

// key and values
const person = {
    'firstName':"Matex",
    "lastName": "Rajput",
    "age:":22
}

console.log(person.firstName);

const oddNumbers = [1,3,5,7,9,11];

console.log("Odd number "  + oddNumbers[1]);

// Operators

let  x = 10;
let y = 5
let a = x + y;

console.log(a);
++x;
--x;
x++;
x--;

console.log(x);

// comparsion operators

console.log(x!=y);
console.log(x===y);
console.log(x<=y);

let isValidNumber = x> 8 && 8<y;

console.log(isValidNumber);

isValidNumber = x> 8 || 8<y;

console.log(isValidNumber);

let isEven = 10 % 2 == 0 ? true : false;

console.log(isEven);

// Implicit conversions
// Explicit conversions

console.log(true+'3');

console.log('4'-'3');

console.log(parseInt('5'));

console.log(parseFloat('5'));

console.log(String(500));

console.log((500).toString);

// Equality

//  == 

const var1= "10";
const var2 = 10;

console.log(var1==var2);
console.log(var1===var2);

//  === has to match the data type too

// conditional statments

const num1=5
const num2=7
if(num1>num2)
{
    console.log("Greater");
}
else
{
    console.log("less");
}

// switch

color  = "red";
switch (color) {
    case "red":
        console.log("color is red");
        
        break;
    case "blue":

    console.log("color is blue");
        
    break;
    default:
        break;
}

// looping code

//    for(let i=1;i<=5;i++)
//    {
//         console.log("Iteration numvber "+ i);
//    }
   
//     let i=1
//    while(i<=5)
//    {
//         console.log("Iteration numvber "+ i);
//         i++;
//    }

// let i = 6;
// do {

//     console.log("Iteration numvber "+ i);
//         i--;
    
// } while (i>=0);

// const numArray = [1,2,3,4,5];

// for (const num of numArray) {
//     console.log("Iteration numvber "+ numArray);
// }


function greet(name_)
{
    console.log("GOOD MORNING " + name_);
}

greet("Matex");
greet("Mateen");


function add(a,b)
{
    return a+b;
}

console.log(add(2,3));

// Arrow functions

const arrowSum = (a,b) =>
{
    return a+b;
}
console.log(arrowSum(4,6));

// scope

