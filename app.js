
let form = document.getElementById("form");


function printError(id,msg) {
 document.getElementById(id).innerHTML = msg;
}






form.addEventListener('submit', function(event){
event.preventDefault();

let name = document.getElementById("name").value;
let email= document.getElementById("email").value;
let mobile= document.getElementById("mobile").value;
let country= document.getElementById("country").value;
let gender = document.getElementById("gender").value


if(name == "") {
 printError("nameerr","Please enter your name");
 var elem = document.getElementById("name");
     elem.classList.add("input-red");
     elem.classList.remove("input-green");
} else {
       var regex = /^[a-zA-Z\s]+$/;
       if(regex.test(name) === false){
        printError("nameerr","Please enter a valid name");
         var elem = document.getElementById("name");
          elem.classList.add("input-red");
          elem.classList.remove("input-green");
       } else{
          console.log("ok for name");
          printError("nameerr"," ");
          var elem = document.getElementById("name");
          elem.classList.remove("input-red");
          elem.classList.add("input-green");

       }

    }

});




