let key="email"
let value="nitesh@gmail.com"

localStorage.setItem(key,value)

let key2="password"
let value2=12345
localStorage.setItem(key2,value2)
function login(){
    var a=document.getElementById("username").value;
    var b=document.getElementById("password").value;

   var p=localStorage.getItem("email");
   var q=localStorage.getItem("password");

   if(p==a && q==b){
    window.location.href="../index.html";
    alert("welcome")
   
   }
   else{
    alert("wrong data")
   }

}