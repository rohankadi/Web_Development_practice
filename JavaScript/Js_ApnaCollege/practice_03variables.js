/*
Variables : Name of storage location or container of storing data

02 TYPES
1. Local Variable : declared and access within a block or function
2. Global Variable : declared outside the function and access from anywhere ie inside and outside of a block or function
*/

//01 Local variable
function demo1(){
    let num = 10;
    console.log(num);
}
demo1();

function demo2(num){
    return num;
}
console.log(demo2(20));

//02 Global variable
let a = 50;
function demo3(){
    console.log(a++);
}
demo3();
console.log(a);
