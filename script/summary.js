// // COMMON INTERVIEW QUESTIONS

// // const { jsx } = require("react/jsx-runtime");

// // 1) Tell the difference Between Primitive and Non-Primitive Data Types in JavaScript.

// // 2) What are the Truthy and Falsy values? Give me some examples.



// // 3) What is the difference between null and undefined?

// // 4) What are the differences between double equal (==) and triple equal (===)?

// // 5) What is scope in JavaScript?

// // // 6) Define block scope and global scope. 
// // console.log(name);
// // // var name = "Riadul";
// // 7) What is hoisting in JavaScript?

// // 8) How to use the JavaScript callback function?

// // 9) Explain closure in JavaScript

// // 10) Explain passed by value and passed by reference.




// //////



// // let num1 = 10;
// // let num2 = num1;

// // num1 = 20;

// // console.log(num1);
// // console.log(num2);




// // let arr1 = [1, 2, 3];
// // let arr2 = arr1;

// // arr1.push(4);

// // console.log(arr1);
// // console.log(arr2);


// // let a = 5;
// // let b = a;

// // a = 10;

// // console.log(a);
// // console.log(b);




// // let obj1 = { name: "Alice"};
// // let obj2 = obj1;

// // obj1.name = "Bob";

// // console.log(obj1.name);
// // console.log(obj2.name);




// // if(false) { console.log("This is falsy");}
// // if (0) { console.log("This is falsy!");}
// // if("") { console.log("this is falsy");}
// // if(null) { console.log("this is falsy");}
// // if(undefined) { console.log("This is falsy");
// // }

// // if(NaN) { console.log("This is falsy");}



// // if(true) { console.log("This is truthy");}
// // if(1) { console.log("This is truthy");}
// // if ("hello") { console.log("this is truthy");
// // }
// // if({}) {console.log("this is trughty");}
// // if([]) {console.log("this is truthy");}



// // let value1 = 0;
// // if(value1) {
// //     console.log("This is truthy");
// // }else{
// //     console.log("this is falsy");
// // }


// // let value2 = "Hello";
// // if(value2) {
// //     console.log("this is truthy");
// // }else{
// //     console.log("this is falsy");
// // }



// // if ("Hello") {
// //     console.log("This is truthy");
// // }

// // if(0) {
// //     console.log("This is truthu");
// // }else{
// //      console.log("this is falsy");
// // }




// // let x;
// // console.log(x);

// // function myFunction() {

// // }

// // let result = myFunction();
// // console.log(result);


// // let person = null;
// // console.log(person);

// // let object = {};
// // console.log(object);

// // object = null;
// // console.log(object);


// // console.log(null == undefined);

// // console.log(null === undefined);





// // let user;
// // console.log(user);


// // let data = null;
// // console.log(data);


// // console.log(5 == "5");
// // console.log(0 == false);
// // console.log(null == undefined);




// // console.log(5 === "5");
// // console.log(0 === false);
// // console.log(null === undefined);




// // console.log(null == undefined);


// // console.log(null === undefined);



// // let obj1 = { name: "John"};
// // let obj2 = obj1;
// // console.log(obj1 == obj2);

// // let obj1 = { name: "John"};
// // let obj2 = {name: "John"};
// // console.log(obj1 === obj2);
 

// // let globalVar = "I am global";

// // function printGlobalVar() {
// //     console.log(globalVar);
// // }

// // printGlobalVar();
// // console.log(globalVar);


// // function exampleFunction() {
// //     let localVar = "I am local to the function";
// //     console.log(localVar);
// // }

// // exampleFunction();
// // console.log(localVar);


// // if (true) {
// //     let blockVar = "I am inside the block";
// //     console.log(blockVar);
// // }

// // console.log(blockVar);




// // function outer() {
// //     let outerVar = "I am outer";

// //     function inner() {
// //         console.log(outerVar);
// //     }

// //     inner();
// // }

// // outer();


// // console.log(this);


// // function showThis() {
// //     console.log(this);
// // }

// // showThis();



// // console.log(x);
// // var x = 5;
// // console.log(x);




// // function outer() {
// //     let outerVar = "I am outer";

// //     function inner() {
// //         console.log(outerVar);
// //     }
// //     return inner;
// // }

// // const closureFunction = outer();
// // closureFunction();


// // let globalVar = "I am in global scope";

// // function myFunction() {
// //     console.log(globalVar);
// // }

// // myFunction();
// // console.log(globalVar);




// // if (true) {
// //     let blockVar = "I  am inside a block";
// //     console.log(blockVar);
// // }

// // console.log(blockVar);


// // for (let i = 0; i < 3; i++) {
// //     console.log(i);
// // }

// // console.log(i);


// // let globalVar = "I am global";
// // console.log(globalVar);

// // if(true) { let blockVar = "I am block-scoped"};



// // let name = "Alice";


// // function greet() {
// //     console.log(name);
// // }

// // greet();

// // console.log(name);




// // if (true) {
// //     let name = "Bob";
// //     console.log(name);
// // }

// // console.log(name);



// // console.log(x);
// // var x = 5;
// // console.log(x);



// // var x;
// // console.log(x);
// // x = 5;
// // console.log(x);


// // console.log(y);
// // let y = 10;



// // let y;
// // console.log(y);
// // y = 10;



// // myFunction();

// // function myFunction() {
// //     console.log("Hello, World!");
// // }


// // function myFunction() {
// //     console.log("Hello, World!");
// // }

// // myFunction();


// // myFunction();

// // var myFunction = function() {
// //     console.log("Hello, World!");
// // };





// // var myFunction;

// // myFunction();
// // myFunction = function() {
// //     console.log("Hello, World!");
// // };




// // console.log(a);
// // var a = 2;
// // console.log(a);


// // console.log(b);
// // let b = 3;




// // greet();

// // function greet() {
// //     console.log("Hello, World!");
// // }




// // sayHello();

// // var sayHello = function () {
// //     console.log("Hello!");
// // };





// // function greeting(name, callback) {
// //     console.log("Hello," + name);
// //     callback();
// // }

// // function farewell() {
// //     console.log("Goodbye!");
// // }

// // greeting("Alice", farewell);





// // console.log("Start");

// // setTimeout(function(){
// //     console.log("This happens after 2 seconds");
// // }, 2000);

// // console.log("End");


// // let numbers = [1, 2, 3, 4, 5, 6, 7];
 
// // numbers.forEach(function(number){
// //     console.log(number * 2);
// // });


// // function fetchData(callback) {
// //     let data = null;
// //     let error = null;


// //     setTimeout(() => {
// //         error = "Something went wrong!";
// //         callback(error, data);
// //     }, 1000);
// // }

// // fetchData(function(error, data) {
// //     if (error) {
// //         console.log("Error:", error);
// //     }else{
// //         console.log("Data:", data);
// //     }
// // });



// // login(user, function(error, userData) {
// //     if(error) {
// //         console.log("Login failed");
// //     }else{
// //         getProfile(userData, function(error, profile) {
// //             if(error) {
// //                 console.log("Profile fetch failed");
// //             }else{
// //                 updateUserSettings(profile, function(error, result) {
// //                     if (error) {
// //                         console.log("Setting update failed");
// //                     }else {
// //                         console.log("User settings updated");
// //                     }
// //                 })
// //             }
// //         })
// //     }
// // })



// // login(user, function(error, userData) {
// //   if (error) {
// //     console.log("Login failed!");
// //   } else {
// //     getProfile(userData, function(error, profile) {
// //       if (error) {
// //         console.log("Profile fetch failed!");
// //       } else {
// //         updateUserSettings(profile, function(error, result) {
// //           if (error) {
// //             console.log("Settings update failed!");
// //           } else {
// //             console.log("User settings updated!");
// //           }
// //         });
// //       }
// //     });
// //   }
// // });



// // function fetchData(callback) {
// //     setTimeout(() => {
// //         const data = {name: "John", age: 30};
// //         callback(null, data);
// //     }, 2000);
// // }


// // function displayData(error, data) {
// //     if(error) {
// //         console.log("Error:", error);
// //     }else{
// //         console.log("User Data:", data);
// //     }
// // }

// // console.log("Fetching data...");
// // fetchData(displayData);





// // function outerFunction(outerVariable) {
// //     let outerVariable2 = "I am from outer";

// //     function innerFunction(innerVariable) {
// //         console.log("outer Variable:" + outerVariable);
// //         console.log("outer Variable 2:" + outerVariable2);
// //         console.log("Inner Variable:" + innerVariable);
// //     }

// //     return innerFunction;
// // }

// // const closureFunction = outerFunction("I am from outer function");
// // closureFunction("I am from inner function");



// function createCounter() {
//     let count = 0;

//     return {
//         increment: function() {
//             count++;
//             console.log(count);
//         },
//         decrement: function() {
//             count--;
//             console.log(count);
//         },
//         getCount: function() {
//             console.log(count);
//         }
//     };
// }


// const counter = createCounter();


// counter.increment();
// counter.increment();
// counter.decrement();
// counter.getCount();



// // function createCounter() {
// //   let count = 0;  // private variable

// //   return {
// //     increment: function() {
// //       count++;
// //       console.log(count);
// //     },
// //     decrement: function() {
// //       count--;
// //       console.log(count);
// //     },
// //     getCount: function() {
// //       console.log(count);
// //     }
// //   };
// // }

// // const counter = createCounter();

// // counter.increment();  // Output: 1
// // counter.increment();  // Output: 2
// // counter.decrement();  // Output: 1
// // counter.getCount();   // Output: 1



// for (var i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000)
// }




// for (var i = 0; i < 3; i++) {
//     (function (index) {
//         setTimeout(function() {
//             console.log(index);
//         }, 1000);
//     })(i);
// }



// function modifyValue(x) {
//     x = 10;
//     console.log("Inside function:", x);
// }

// let num = 5;
// modifyValue(num);
// console.log("outside function:", num);


// function modifyObject(obj) {
//     obj.name = "John";
//     console.log("Inside function:", obj);
// }

// let person = { name:"Alice"};
// modifyObject(person);
// console.log("outside function:", person);


