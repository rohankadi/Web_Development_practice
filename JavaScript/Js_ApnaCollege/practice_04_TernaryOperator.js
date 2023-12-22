// Simpler way to use if and else condition

let age = 20;

let res = (age > 18)?"true":"false";
console.log(res);

 console.log("***************************************");

 function getFee(isMember){
    return isMember ? "$2.50" : "$10";
 }

 console.log("True : " + getFee(true));
 console.log("False : " + getFee(false));
 console.log("Null : " + getFee(null));