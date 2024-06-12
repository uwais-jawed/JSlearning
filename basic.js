// const accId = 14453 
// let accEmail = "uwais@app"
// var accPass = "123"
// accountCity = "Jaipur"
// let accountState
// /*
// never use var becoz of scope issue in it, use let
//  that allows you to change anytime the value , 
//  while const is the best approach but it doesnt 
//  allow change the value, also we can declare anything
//   without let const any keyword but its not an 
//   advisable approach.

// */
// // accId = 2    - not allowed
// accEmail = "ajajja@ajjaj"
// accPass = "345"
// accountCity = "Mumbai"
// console.table([accountState, accEmail, accPass, accountCity, accId])
// console.log(accId);

"use strict"; //treat all js as new version

// alert("hello") //we are using nodejs not browser

// let isLoggedin = true

// let age = "22aa"
// let name = "ahahha"

// console.table([age, name])
// let numb= Number(age)
// console.log(typeof(numb));
// console.log(numb);
// vid3

// let loggedin = 1;
// let n = Boolean(loggedin)

// console.log(n);

// let name = "uwais"
// let repocount = 12

// console.log('hello my name is ${name} and my repocount is ${repocount}');
// let names = new String('uwais')
// console.log(names.toUpperCase);

// console.log(`hello my name is ${name} and my repo is ${repocount}`)

// vid 11

// const gameName = new String('  h  isha uejka ')
// console.log(gameName.split(' ' )); 

// vid12

// const score = 400
// const balance = new Number(110000000)
// console.log(balance.toLocaleString('en-US')) 


// const min = 10
// const max = 20
// console.log(Math.floor(((Math.random() * (max - min +1)) + min)))

// vid13

// let d = new Date("2003-10-15")
// console.log(d.to String('default'{
//     weekday : "long"
// }));
// let timestamp = Date.now()
// console.log(timestamp)

// vid 14

// const myArr = [1,3,4,6,78,9]
// console.log(myArr.length);

// myArr.push(2)
// console.log(myArr);

// vid15c
// const abc = ['a', 'b', 'c']
// const def = ['d', 'e', 'f']

// const all = [...abc, ...def]

// console.log(realarr);

// const arr= [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const realarr = [arr.flat(1)]
// console.log(realarr);

// console.log(Array.from("hitesh"))

// vid 16- objects

// const sym = Symbol("key1")

// const JSuser = {
//     name : "Uwais",
//     age : 20,
//     [sym] : "mykey1",
//     location : "chandigarh",
//     isLoggedIn : false,
//     lastdays :['monday', 'friday']

// }   /*object*/
// Object.freeze(JSuser)

// JSuser.location = "adhahda"
// console.log(JSuser)

// VID 17

// const regUser = {
//     email : "acb@ahs",
//     fullname :{
//         userfullname: {
//             firstname : "Keny",
//             lastname  : "Ackerman"
//         }
//     }
// }

// console.log(regUser.fullname.userfullname.firstname)

// const obj1 = {
//     1 : "a" , 2 : "b"
// }
// const obj2 = {
//     3 : "a" , 4 : "b"
// }

// const obj3 = {...obj1 , ...obj2}
// console.log(obj3);

// vid 18

// const course ={
//     coursename : "JS",
//     price : "2929",
//     teacher : "lodlo"
// }

// const {coursename : cname} = course
// console.log(cname) 

// json= like a object with no name and keys are in strings as well , used in api

// {
//     "name": "uwais",
//     "id" : 3398,
//     "loc" : "chandigarh"
// }

// sometimes we can declare a json with an array that contains objects

// [
//     {},
//     {},
//     {}
// ]

// vid 19

// function funcname() {
//     console.log("a");
//     console.log("n");
// }

// funcname()

// function addtwonum(num1 , num2){ //func k name mein parameter

//     console.log(num1 + num2)
// }
// function addtwonum(num1 , num2){
//     return num1 + num2;
// }

// function loginUsermessg(usenrame = "sam" ){ //aise "sam " likhne se ek default value dedi jati h, ab kabhi undefined nahi jaega
//     if(!usenrame){
//         console.log("please enter a name")
//         return;
//     }
//     return `${usenrame} just logged in `
    
// }
// console.log(loginUsermessg()); 
//js mein return ka matlab value print nahi hota, cnsole k bina kuch printa nhi krega function
// vid 20

// shopping cart

//vid21

// let a = 200
// var c = 300
// if(true){
//     let a = 19 
//     const b = 20 
//     var c = 30
//     console.log("inner",a)
// }

// // console.log(a)
// // // console.log(b)
// console.log(c)

// var behn ka loda h scope mein ma chuda leta h


//vid 22

// function one() {
//     const userName = "uwais"

//     function two() {
//         const web = "yt"
//         console.log(userName)
//     }
//     // console.log(web)
//     two()
// }
// one() //ander wala bahr ka le skta, bahr wala ander k scope ka user nahi kar sakta hai

// function addone(num){
//     return num+1
// }

// addone(5)

// const addtwo = function(num){
//     return num +2
// }

// addtwo(6)

//vid23

// const user = {
//     username : "hitesh",
//     price : 999,

//     welcomeMessage: function(){
//         console.log(`${this.username} just logged in with an amount of ${this.price}`)
//     }
// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
//this keyword functions mein kaam nahi karega

// const chai = () => {
//     let username = "uwais"   
//     console.log(username);
// }

// chai()

//arrow function
//  

//implicit - we will not use {} and in the same line

// const main = (num1, num2) => (num1 + num2)
//implicit arrow function dont need a return keeyweord


//vid24
//IIFE - Immediately invoked function expression - ye turant execute hote hain, iske liye function ko (parenthteis) mein band krna hota hai aur fir uske baad ek () lgana hota h

// (function chai(){
//     console.log("help");
// })();

// ((username)=>{
    
//     console.log(`help me ${username}`)
// })('uwais') //this is the way to pass args and params in an iife arrow func 
// an iife - avoids global scope pollution
//ek ; lgana hota hai if another iife execute krna ho becoz iife ko batana hota hai ki end krna hai ab execution

//vid 26 control flow

//if

// if(true) console.log("acha"), console.log("aph");


//== ye type check nahi krta , === strict equals to type bhi check krta h

// const userLoggedin = true;
// const debitCard = true;
// const registration = false;

// if(userLoggedin && debitCard ){ //&& dono ko krega
//     console.log("allow access");
// }if(userLoggedin || registration){
//     console.log("allow ");
// }
// const month = 3

// switch (month) {
    
//     case 1 :
//         console.log("Jan");
//         break;
//     case 2 :
//         console.log("Feb");
//         break;
//     case 3 :
//         console.log("March");
//         break;
        
//     default:
//         console.log("hatt")
//         break;
// }

//truthy 

// const email = []
// falsy = false, 0, "", bigInt 0n, null, undefined, NaN
// truthy other than falsy are all considered truthy like 0 is a falsy value but "0"  is a truthy
//" "-truthy, [],{}, function(){} 
// if(email){
//     console.log("got email");
// }else{
//     console.log("no email");
// }

//null coalescing operator = ??

// let val1;
// val1 = null ?? 10
// console.log(val1);

//ternary operator
//statement ? yes : no

// const ice= 78;
// ice >=79 ? console.log("yes") : console.log("no");

//vid 27 loops
// let arr=[1,1,1,1,1]

// for (let i = 0 ; i < arr.length; i++){
//     console.log("1");
// }


//vid29 for of loop 

// const arr = [1,2,3,4,5]

// for (const i of arr) {
//     console.log(i)
// }

//maps

// const map = new Map()
// map.set('in', 'india')
// map.set('us', 'united states')
// map.set('uk', 'united kingdom')

// console.log(map)

// const myObject = {
//     'g1' : 'nfs',
//     'g2' : 'gta'
// }

// for (const [key, value] of myObject) {
//     console.log(key, value);
// }

// const obj =  {
//     js : 'javascript',
//     cpp : 'C++',
//     rb : 'ruby',
//     py : 'python'
// }

// for (const key in obj) {
//     console.log(key ,':',obj[key])
// }

//object pe iterate krne waste for in lagana zruri hounda

// const arr = ["js", "value", "blah"]

// for (const key in arr) {
//     console.log(key, ':',arr[key])
// }

//for in by default key hi deta h, value ke liye arr[key] hota h

//callback function and for each thing

// let arr = [1,2,3,4,5]

// arr.forEach(element => {
//     console.log(element);
// });

// function increaseByOne(value) {
//     // console.log(value)
//     value = value +1;   
//     console.log(value); 
// }

// arr.forEach(increaseByOne);

// let cars = [
//     {
//         carName : "Supra",
//         carBrand : "Toyota"
//     },
//     {
//         carName : "Civic",
//         carBrand : "Honda"
//     },
//     {
//         carName : "Benz",
//         carBrand : "Mercedes"
//     }
// ]

// cars.forEach((value, index , arr) =>{
//     console.log(`${value.carBrand} owns the ${value.carName}` );
//     if (value.carBrand === "Honda"&& index===1) {
//         console.log("Finish");
//     }
// })

// const cararar = cars.filter((value)=>value.carBrand === "Mercedes")
// console.log(cararar)
//vid30 - filter map and reduce ^

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// numbers.forEach((num)=>{
//     if (num>5) {
//         console.log(num)
//     }
// })

// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const loda = numbers.map((value)=>value-1)

// console.log(loda);


// const arr= [1,2,3]

// const initialvalue = 0

// // const myTotal = arr.reduce(function (acc, currval){
// //     return acc + currval
// // },initialvalue)


// const myTotal = arr.reduce((acc, currval)=>{
//     return currval = acc * currval  }, initialvalue)
// console.log(myTotal);

//VID 36 EVENTS 

//VID 40 PROMISES

const samplePromise = new Promise(function(resolve,reject){
    //DB calls, asymnc, cryptography and network

    setTimeout(() => {
        console.log("async task completed");
        resolve()
    },1000);

})

samplePromise.then(function(){
    console.log("Promise consumed")
})

