

// let a = 20 ; // block scoped 
// if(true) {
//     const a = 10; 
//     const b = 90;
//     console.log(a+b);
// }
// comsole.log(b);     (After execution of the if block it will deleted from the context in the call stack.And the b is also not 
//                          accessible because the const is a block scoped.So output of the last line will be not defined.)


// if(true){
//     let a  = 20 ;
//     console.log(2*a);
// }
// console.log(3 * a)

// let and const are block scoped --var is a context scoped-- so in the below code 
//output will be 40 & 60(for var because it is a context scoped draw and see the call stack diagram) and in the above 
// code output is 40 & not defined error(because let and const are block scoped)
// console.log(a)
// if(true) {
//     var a = 20 ;
//     console.log(2*a);
// }
// console.log(3*a);

// function callme() {
//     console.log(z);
//     var x = 90 ; // callme context
//     if(true) {
//         let y = 100 ; // block scoped
//         var z = 10 ; // callme context
//         console.log(a , y , z, x) ;
//     }
//     console.log(y) ;
// }
// let a  =  30 ; // global context
// callme();

// {
//     // block 
//     let a = 90 ;
//     console.log(a) // 90
// }
// console.log(a) // not defined error

//class in java script is similar to the one in Java.It is an entity or a blueprint is used to create object.Insead of creating the object
//by writing the same properties again and again the, class and constructor is used , it will reduce the code

//Creating objects without class
var student1 = {
    name = [89, 1, 2] ;
   aadhar_number = "3893999300";
   type = "frontbencher";
}

var student2 = {
    name = "aravind";
   aadhar_number = "372938203";
   type = "backbencher";
}

//Creating objects by using the class

// class Student {
//     constructor(name, aadhar, type){    //'constructor' is a keyword that need to be used while creating an object using the keyword
//         // this  = {} // #400
//         console.log(this) // 
//         this.name = name ;
//         this.aadhar_number = aadhar ;
//         this.type = type;
//     }
// }

// 'new' keyword gives the paramenters to the constructor along with an empty object which is created in the heap memory
//and then the constructor stores all the values to the object.here 'this' keyword refers to the object address which is created.
//Then cosntructor passes filled object to the new keyword, which assigns it to the s1(instance) variable.


// var s1 = new Student([89, 1, 2], "3893999300", "frontbencher");
// var s2 = new Student("aravind", "372938203" , "backbencher");

// window.alert("Some message");
// let value = window.prompt("Something prompt")
// console.log(value)


// console.log(window.setTimeout)  //setimeout(funstion,delaytime in msec) is a function that takes callback funstion and registers
                                   //the function to the timer and send the function to Callback Queue after timeout. 

//Note:10e1=10*10^1=100  , 10e2=10*10^2=10*100=1000  

// console.log(1) // t = 0s
// let func = () => {
//     console.log(4)
// }
// let func1 = () => {
//     console.log(5)
// }

// console.log(2)
// setTimeout(func, 9000); // t = 8ms , t = 9008ms
// setTimeout(func1, 3000); // t = 10ms, t = 3010ms
// console.log(3) // t = 12ms

// console.time("abc") // t = 13ms
// for(let i = 0 ; i < 10e9; i++){
//     // 10e9 => 10*10^9 = 10^10 // 8700ms
// }
// console.timeEnd("abc") // t = 8713ms

// callback_queue = [func]



function makeCounter(){
    let count = 0 ;
    return function(){
        return count++;
    }
}

let counter1 = makeCounter(); // #400, count = 3, counter1 = #400
let counter2 = makeCounter(); // #500, count = 2, counter2 = #500;
console.log(counter1()) // 0
console.log(counter1()) // 1
console.log(counter2()) // 0

console.log(counter1(), counter2()) // 2, 1


function act (a,b=10) {  //functiona also takes default value.If no value is passed it takes default value and if passed any value it takes it
    console.log(a,b)
}
act();  //output- undefined 10(default value created)
act(2) //op - 2 10
act(2,3) //op- 2 3

function talk(a) {  //Generally variables in fuctions is declared with var keyword initially and we can redeclare them again as below
    var a =10;
    console.log(a);
}

talk(20);   //output is 20  

Spread operator :
The Spread Operator
The JavaScript spread operator (...) expands an iterable (like an array) into more elements.

This allows us to quickly copy all or parts of an existing array into another array:

Example
Assign the first and second items from numbers to variables and put the rest in an array:

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

Output : 1,2,3,4,5,6 
