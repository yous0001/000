var password_input=document.getElementById("login-password");
var email_input=document.getElementById("login-email");
var users=[];
localStorage.setItem("currentuser","")

if(localStorage.getItem("users")!=null){
users=JSON.parse(localStorage.getItem("users"));
}
console.log(users);


function login(){
    if(!allinputsfilled()){
        document.getElementById("message").setAttribute("class","text-danger");
        document.getElementById("message").innerHTML="All inputs are required";
        console.log("All inputs are required");
    }
    else if(!isemailexisted()){
        document.getElementById("message").setAttribute("class","text-danger");
        document.getElementById("message").innerHTML="Email is not exited";
        console.log("Email is not exited");

    }
    else if(!ispasswordright()){
        document.getElementById("message").setAttribute("class","text-danger");
        document.getElementById("message").innerHTML="Wrong password";
        console.log("Wrong password");
    }
    else{
        for(var i=0;i<users.length;i++){
            if(users[i].email==email_input.value){
                window.location.href = "./userprofile.html";
                localStorage.setItem("currentuser",users[i].name)
                break;
            }
        }
        

    }
}

function isemailexisted(){
    var repeation =false;
    for(var i=0;i<users.length;i++){
    if(users[i].email==email_input.value){
        repeation=true;
        break;
    }
}
return repeation;
}

function allinputsfilled(){
    if(password_input.value==""||email_input.value==""){
        return false;
    }
    else{
        return true;
        
    }

}
function ispasswordright(){
    var pass=false;
    for(var i=0;i<users.length;i++){
        if(users[i].email==email_input.value){
            if(users[i].password==password_input.value){
                pass=true;
             break;
            }
        }
    }
    return pass;
}