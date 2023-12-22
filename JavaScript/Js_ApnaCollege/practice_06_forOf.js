let str = "JavaScript";
//for of statement loops through the values of an iterable object.

//Used only for Strings and Arrays
//Receives a value from the sequence on each iteration

let size = 0;

for(let i of str){
    //iterator --> characters
    console.log("i = ", i);
    size++;
}

console.log("Size of str = ",size);