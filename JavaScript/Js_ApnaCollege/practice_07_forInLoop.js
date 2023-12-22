//Used for Objects in js
//it returns a keys of an object
//for in statement loops through the properties of an Object:

const student = {
    name: "Ravan",
    marks: 56,
    age: 20,
    isPassed: true
}

/*
for(let key in student){
    console.log("Key : ",key);
}
*/

//if we want to print value also then use (object[iterator] ==> student[key])
for (let key in student) {
    console.log("Key : ", key, "Value = ", student[key]);
}