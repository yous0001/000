var name_input=document.getElementById("signup-name");
var email_input=document.getElementById("signup-email");
var password_input=document.getElementById("signup-password");
var users=[];

if(localStorage.getItem("users")!=null){
users=JSON.parse(localStorage.getItem("users"));
}


function register(){
    if(!allinputsfilled()){
        document.getElementById("message").setAttribute("class","text-danger");
        document.getElementById("message").innerHTML="All inputs are required";
        console.log("All inputs are required");
    }
    else if(!isemailvalid()){
        document.getElementById("message").setAttribute("class","text-danger");
        document.getElementById("message").innerHTML="Email is not valid";
        console.log("Email is not valid");

    }
    else if(!isemailreapeated()){
        document.getElementById("message").setAttribute("class","text-danger");
        document.getElementById("message").innerHTML="This email already is existed";
        console.log("This email already is existed");
    }
    else{
        document.getElementById("message").setAttribute("class","text-success");
        document.getElementById("message").innerHTML="success";
        console.log("success");
        insertuser();
        console.log(users);
        window.location.href = "./login.html";

    }
}



function isemailvalid(){
    var email_regex= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email=email_input.value;
    if(email_regex.test(email)){
        return true;
    }
    else{
        return false;
    }

}
function allinputsfilled(){
    if(name_input.value==""||password_input.value==""){
        return false;
    }
    else{
        return true;
        
    }

}
function isemailreapeated(){
    var repeation =true;
    for(var i=0;i<users.length;i++){
    if(users[i].email==email_input.value){
        repeation=false;
        break;
    }
}
return repeation;
}

function insertuser(){
    var user={
        name:name_input.value
        ,email:email_input.value
        ,password:password_input.value
    }
    users.push(user);
    console.log(users);
    localStorage.setItem("users",JSON.stringify(users));
}
