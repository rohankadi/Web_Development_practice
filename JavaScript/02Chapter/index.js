var nam = prompt("Enter your name : ")
document.write(nam)

var a = document.getElementById("demo")
function myFunction(){
    a.innerHTML = "Good Morning"
}

function reset(){
    a.innerHTML = ""
}