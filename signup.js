document.querySelector("form").addEventListener("submit", addcred)
let signupArr=JSON.parse(localStorage.getItem("details"))||[]

function addcred(event){
    event.preventDefault()

    let first_name=document.getElementById("fname").value
    let last_name=document.getElementById("lname").value
    let email=document.getElementById("email").value
    let user_name=document.getElementById("usrname").value
    let password=document.getElementById("password").value

    let obj={
        first_name,
        last_name,
        email,
        user_name,
        password,
    }
    signupArr.push(obj)
    window.location = "./login.html"
    localStorage.setItem("details",JSON.stringify(signupArr))
}