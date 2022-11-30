document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})
function login()
{
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    })
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            location.replace("dashboard.html")
            
        }
        
    })
}

function signUp(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            location.replace("project_welcome.html")
            
        }
        
    })
}

function forgotPass(){
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("Reset link sent to your email id")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}
// Trending technologies section start

function batan1()
{
    window.location="artificial.html";
}
function batan2()
{
    window.location="aws.html";
}
function batan3()
{
    window.location="cloud_computing.html";
}
function batan4()
{
    window.location="data_science.html";
}
function batan5()
{
    window.location="machine_learning.html";
}


function batan13()
{
    window.location="data_structure.html";
}
function batan14()
{
    window.location="daa.html";
}
function batan15()
{
    window.location="java.html";
}
function batan16()
{
    window.location="web_development.html";
}



function batan7()
{
    window.location="dashboard.html";
}
function batan8()
{
    window.location="dashboard.html";
}
function batan9()
{
    window.location="dashboard.html";
}
function batan10()
{
    window.location="dashboard.html";
}
function batan11()
{
    window.location="dashboard.html";
}


// Trending technologies section end
// function effect()
//     {
//         var out=document.getElementById("#email");
//         out.on
//     }
