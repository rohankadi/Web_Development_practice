'use strict'

function sayHello(){
    console.log("Hello Good morning")
}

sayHello();

function addition(num1, num2){
    var res = num1 + num2;
    return res;
}

console.log(addition(10, 20));

//anonymous function
var ref = function(){
    console.log("anonymous function");
}
ref();

//arrow function
var arrowex = ()=>  {
    console.log("Arrow Example");
}

arrowex();

//forEach
var arr = [10, 20, 30, 40, 50];

arr.forEach(function (ele){
    console.log(ele);
})

//or using anonymous function
var printEle = function(element){
    console.log(element)
}
arr.forEach(printEle);