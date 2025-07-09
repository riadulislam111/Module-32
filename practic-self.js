
// // // arguments অবজেক্ট কী?

// function sum(a, b, c){
//     console.log(arguments);
// }

// sum (34, 345 ,45, 56 ,67, 7, 5656, 7);

// arguments কে অ্যারে বানানো

// function sum(a, b, c){
//     const newArg = [...arguments];
//     console.log(newArg);
// }

// sum(45, 56, 67 ,78, 78 ,43);



// length প্রপার্টি কী?

// function sum(a, b, c, d, f,f,sd,sd, sd, sd,d){
//     console.log(arguments);
// }

// // console.log(sum.length);
// console.log(typeof sum);

// প্রিমিটিভ টাইপ (string)

// let name ="rana";

// function test(text){
//     text ="alin";
// }
// test (name);
// console.log(name);



// let name = "masud";

// function test(text){
//     return "korim";
// }

// name = test(name);
// console.log(name);

// let person = {name: "nasud"};

// function test (person){
//     person.name ="korim";
// }

// test(person);
// console.log(person.name);

// প্রিমিটিভ টাইপ (number)

// let a = 10;
// let b = 20;

// function sum(num1, num2){
//     num1 = 50;
// }

// sum(a, b);
// console.log(a);


// let a = 10;
// let b = 20;

// function sum(num1, num2){
//     num1 = 50;
//     return num1;
// }

// a = sum();
// console.log(a,b);


// let obj = { value: 10};

// function sum(num){
//     num.value = 50;
//     return ;
// }

// sum (obj.value);
// console.log(obj.value);

// অবজেক্ট পাস করলে কী হয়? (Reference Type)

// const person = { name: "foal", age: 34 , country: "bd", city: "cera"};

// function sum(obj){
//     obj.name = "hero alom";
// }

// sum(person);
// console.log(person);

// const hero = { name: "salman khan", age: 56};

// function sum(obj){
//     obj.name = "khan";
// }

// sum(hero);
// console.log(hero);


// const rat = { name: "ratul", age: 34};

// function sum(obj){
//     obj.name = "jarif";
// }

// sum(rat);
// console.log(rat);

// function test() {
//     console.log(arguments.length);
// }
// test(10, 20, 30, 40); // আউটপুট কত আসবে?


// const obj = { name: "rahim" };

// function modify(o) {
//     o.name = "karim";
// }

// modify(obj);
// console.log(obj.name); // কী হবে?


// function sumAll(){
//     let sum = 0;
//     for(let i = 0; i<arguments.length; i++){
//         sum +=arguments[i];
//     }
//     console.log(sum);
// }

// sumAll(4,345,5,35,45,5,3534,543,543,543,5);
// sumAll(3,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,3,43,434);



// প্রিমিটিভ টাইপ (string) পাস করলে পরিবর্তন হয় কিনা?

// const name = "rahin";

// function changeName (text){
//     text = "karim";

// }

// changeName(name);
// // console.log(name);

// const person = { name: "rahuinm", age: 23};

// function changeName(obj){
//     obj.name = "karim";
// }

// changeName(person);
// console.log(person);




// function ghotok(patri, name){
//     patri(name);
// }

// // console.log(ghotok)

// const patri = function(name){
//     console.log("okey patri1 paici", name);
// }

// const patri2 = function (name){
//     console.log("okey patri2 paici", name);
// }

// const patri3 = function(name){
// console.log("okey patri3 paici", name);
// }

// ghotok(patri, "hero alom")
// // console.log(patri)
// ghotok(patri2, "Masud");
// ghotok(patri3,"abul");

// const goodMorning = function(name){
//     console.log("Good morning, " + name);
// }

// function ghotok(patri, name){
//     patri(name);
// }


// ghotok(goodMorning, "Ali");
// ghotok(goodMorning, "Sadiq");
// ghotok(goodMorning, "Rina");

// console.log(ghotok);

// পাসওয়ার্ড চেক করার ফাংশন

// const checkPassword = function(password){
//     if(password === "12345"){
//         console.log("Access grunted");
//     }
//     else{
//         console.log("Access denied");
//     }
// }

// function ghotok(patri, password){
//     patri(password);
// }

// ghotok(checkPassword, "12345");
// ghotok(checkPassword, "123465");


// function sum(){
//     let counter = 0;
//     counter++;
//     console.log(counter);
// }

// sum();
// sum();
// sum();

// (Closures ব্যবহার)

// function sum(){
//     let counter = 0;
//     return function(){
//         counter++;
//         console.log(counter);
//     }
// }

// const result = sum();
// result();
// result();
// result();
// result();
// result();
// result();

// const result2 = sum();

// result2();
// result2();
// result2();
// result2();
// result2();

// প্র্যাকটিস চ্যালেঞ্জ:

// function limitCounter(){
//     let counter = 0;
//     return function(){
//         if(counter < 20){
//             counter++;
//             console.log(counter);
//         }else{
//             console.log("Limit reached!")
//         }

//     }
// }


// const counter1 = limitCounter();

// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();


// অ্যারে রেফারেন্স চেক


// const num1 = [];
// const num2 = num1;


// if(num1 === num2){
//     console.log("this is Equal value")
// }
// else{
//     console.log("NOO this is not Equal")
// }

// আলাদা অ্যারে এবং স্ট্রিং মাল্টিপ্লিকেশন

// const num1 = [];
// const num2 = [];

// if(5 * "2" === 10){
//     console.log("this is Equal value")
// }
// else{
//     console.log("NOO this is not Equal")
// }

// সংখ্যা বনাম স্ট্রিং তুলনা

// const num1 = 10;
// const num2 = "10";


// if(num1 === num2){
//     console.log("this is Equal value")
// }
// else{
//     console.log("no this is not Equal")
// // }

// console.log(0 == false);
// console.log(0 === false);

// console.log("5" == 5);
// console.log("5" === 5);


// const obj1 = { a: 1};
// const obj2 = { a: 1};


// console.log(obj1 == obj2);
// console.log(obj1 === obj2);

// const obj1 = { a: 1};
// const obj2 = obj1;

// console.log(obj1 == obj2);
// console.log(obj1 === obj2);

// const obj1 = {a: 1};
// const obj2 = { a: 1};
// const obj3 =obj1;

// // console.log(obj1 == obj2);
// // console.log(obj1 === obj2);
// console.log(obj1 == obj3);
// console.log(obj1 === obj3);

// const person1 = {name: "Masud"};
// const person2 = person1;
// person2.name = "karim";

// console.log(person1.name);
// console.log(person2.name);


// let age = 10;

// age += 1;
// console.log(age);


// let age = 10;



// console.log(++age);
// console.log(age++);
// console.log(age);



// let age = 10;


// console.log(age--);
// console.log(age);

// let x = 13;

// console.log(x++);
// console.log(++x);
// console.log(x--);
// console.log(--x);
// console.log(x);


// let y = 20;
// console.log(y--); // ?
// console.log(--y); // ?
// console.log(y++); // ?
// console.log(++y); // ?
// console.log(y);   // ?



// let name;

// console.log(name);


// let name = undefined;

// console.log(name);

// function sum(num1 , num2){
//     console.log(num1, num2);
// }
// sum();


// let name = null;
// console.log(typeof name);

// function sum(num1, num2){
//     console.log(num1, num2);
   
// }
// const result = sum(23, 234);
// console.log(result);


// function sum(num1, num2){
//     console.log(num1, num2);
// }
// console.log(sum(34, 45));



// let a ;

// console.log(typeof a);


// function test (x, y ){
    // console.log(x, y);
// }

// test(6);


// function add(a, b){
//     return a + b;
// }
// const result = add(20, 34);
// console.log(result);

// function check(){
//     console.log("Hello");
// }
// console.log(check());


// function changeNumber(num){
//     num = num + 10;
//     console.log("funtioner vitore:", num)
// }

// const myNumber = 20;
// changeNumber(myNumber);
// console.log("funtioner baire:", myNumber);

// function changeName(person){
//     person.name = "Rahim";
//     console.log("functioner vitore:", person.name);
// }

// const person = { name: "karim"};
// changeName(person);
// console.log("functioner baire:", person.name);


// function changeName(person){
//     let newPerson = {...person};
//     newPerson.name = "Rahim";
//     console.log("functoner vitore:", newPerson.name);
// }

// const person = {name: "karim"};
// changeName(person);


// console.log("functoner baire:", person.name);


// const sum = (p, q) => {
//     p + q;
// }

// const result = sum(2, 3);
// console.log(result);
// const sum = (p, q) => {
//     p + q;
// }
// const result = sum(2, 3);
// console.log(result);



// const sum = (p, q) => {
//     return p + q; 
// }
// const result = sum(2, 3);
// console.log(result);



// const sum = (p , q) => {
//     return p + q;
// }

// const result = sum(3, 5);
// console.log(result);

// function update(num){
//     num = num * 2;
// }
// let myNum = 5;
// update(myNum);
// console.log(myNum);


// function modify(obj){
//     obj.value = 100;
// }
// let data = { value: 50};
// modify(data);
// console.log(data.value);

// function modify(obj){
//     let newObj = { ...obj };
//     newObj.value = 199;
// }
// let data = { value: 50};
// modify(data);
// console.log(data.value);


// const multiply = (a, b) => {
//     a * b;
// }

// const result = multiply(5,6);
// console.log(result);

// function sum(num1, num2){
//     const result = num1 + num2;
//     // console.log(result);

//     if(true){
//         var result2 = num1 - num2;
//     }
//     console.log(result2);
// }

// sum(10, 20);


// var output;
// console.log(output);
// var output = "BD";

// function sum (num1, num2){
//     // var result2;
//     const result = num1 + num2;

//     console.log(result2);

//    if(true){
//     var result2 = num1 - num2;
//    }


// }

// sum(34,54);


// function sum ( num1, num2){
//     console.log(result2);
//     let result2 = num1 - num2;
// }

// sum(43,35);


// console.log(myVar);
// var myVar = "Hello";



// console.log(myVar);
// let myVar = "FGool";

// function calculate(a, b){
//     if(true){
//         let result = a + b;
//         return result;
//     }
// }

// console.log(calculate(6,7));


// if(true){
//     let x = 4;
// }
// console.log(x);


// function test(){
//     var a = 34;
//     let b = 23;
//     const c = 27;
// }

// console.log(a);
// console.log(b);
// console.log(c);


// function test(){
//     var a = 34;
//     let b = 12;
//     const c = 2232;
//     return {a, b, c };
// }

// const values = test();
// console.log(values.a);
// console.log(values.b);
// console.log(values.c);

// function myFunc(){
//     var x = 10;
//     let y = 20;
//     const z = 30;
// }
// console.log(x); // ?
// console.log(y); // ?
// console.log(z); // ?


// var num = 50;

// function check(){
//     num = 100;
// }
// check();
// // console.log(num);


// const name = function(){};

//     if(name){
//        console.log("this is truthy value")
//     }
//     else{
//        console.log("this is falsy value")
//     }
   
   

//   const name = "gias";

// //   console.log(!name);
   

// if(!!name){
//     console.log("this is truthy value");
// }


// const val1 = "";
// const val2 = 0;
// const val3 = null;
// const val4 = [];
// const val5 = "false";


// console.log(Boolean(val1));
// console.log(Boolean(val2));
// console.log(Boolean(val3));
// console.log(Boolean(val4));
// console.log(Boolean(val5));




// const number = 0;

// if(number){
//     console.log("Truthy");
// }
// else{
//     console.log("Falsy");
// }



// console.log(!!hello);
// console.log(!!0);
// console.log(!!undefined);
// console.log(!!{});


// console.log(!!"hello");
// console.log(!!0);
// console.log(!!undefined);
// console.log(!!{});

// console.log(!!null);
// console.log(!![]);
// console.log(!!{});
// console.log(!!NaN);


// console.log(0 == false);
// console.log('1' == 1);

// if(true){
//     let a = 10;
// }
// // console.log(a);

// let b = 20;
// console.log(b);

// console.log(10 == '10');
// console.log(10 === '10');

// let x = null;
// let y = undefined;

// console.log(x == y );
// console.log(x === y);

// let a = 300;
// if(true){
//     let a = 50;
//     console.log(a);
// }
// console.log(a);

// const bigNumber = 345325345345345345345353453535353453453453453453534545353453534535345435435345345453535345n;
// console.log(bigNumber);

// const sym1 = Symbol('description');
// const sym2 = Symbol('description');


// console.log(sym1  === sym2);
// const obj = {
//     [sym1]: 'value1',
//     [sym2]: 'value2',
// };

// console.log(obj[sym1]);
// console.log(obj[sym2]);

// let y = "6";
// let x = + y;

// console.log(typeof x);
// console.log(typeof y);



// d = new Date();
// console.log(Number(d));

// d = new Date();
// console.log(d.getTime())

// let start = new Date("2025-03-20T00:00:00Z");
// let end = new Date();
// let difference = end.getTime() - start.getTime();
// console.log(difference);  // দুই তারিখের মধ্যে পার্থক্য মিলি সেকেন্ডে


// let currentData = Date();
// console.log(currentData);


// let d = new Date();
// console.log(d);  // Date অবজেক্ট
// console.log(d.toString());  // একই তারিখ, কিন্তু স্ট্রিং আকারে




// // let x = 10;
// let y = 3.14


// let name = "John Doe";
// let greeting = 'Hello, World';

// let isAdult = true;
// let isVerified = false;


// let x ;
// // console.log(x);


// let person = null;
// // console.log(person);


// let sym1 = Symbol('descriptoin');
// let sym2 = Symbol('description');
// // console.log(sym1 === sym2);


// let bihNumber = 45242556452555655565545652554555254555n;
// console.log(bihNumber);




// function greet() {
//     console.log("Hello", "World!");
// }

// greet();

// console.log(typeof greet);


// function add(x, y) {
//     return x + y;
// }

// add();

// add.description = "This is a  function to add two numbers.";
// console.log(add.description);


// let fruits = ["apple", "banana", "orange"];

// console.log(fruits);

// console.log(typeof fruits);

// fruits.push("grapes");
// console.log(fruits);


// let numbers = [1, 2,3,4];
// let doubled = numbers.map(num => num * 2);
// console.log(doubled);


// function greet() {
//     console.log(`Hello, ${this.name}`);
// }

// const person = {
//     name: "Alice"
// };

// greet.call(person);

// function sum(a, b) {
//     console.log(a+b);
// }

// const numbers = [5, 10];
// sum.apply(null, numbers);


// const person = {
//     name: 'Bob',
//     greet: function () {
//         console.log(`Hello, ${this.name}`);
//     }
// };

// const greetBob = person.greet.bind(person);
// greetBob();


// let fruits = ["apple", "banana"];
// fruits.push("orange");
// fruits.push("add");
// fruits.push("add");
// fruits.push("add");
// fruits.push("add");
// console.log(fruits);




