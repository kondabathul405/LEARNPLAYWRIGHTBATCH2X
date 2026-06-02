// let age = 18;

// if(age >= 18){
//     console.log("you are an Adult!");
// }
// else{
//     console.log("you are an minor");
// }

//app.vwo.com--> viewer,editor or admin

let isLoggedIn = "true";
let userRole = "admin";

if(isLoggedIn){

    if(userRole === "admin"){
        console.log("admin can do all the things ");
    }
    else if(userRole === "editor"){
        console.log("welcome editor - edit access granted ");

    }
    else if (userRole === "viewer"){
        console.log("welcome viewer - Read-only access");
    }
    else {
        console.log("No idea you may be guest!role");
    }}
    else{
        console.log("you are not logged in!")
    }
