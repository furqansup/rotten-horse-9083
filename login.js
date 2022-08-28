document.querySelector("form").addEventListener("submit", check)

function check(event){
    event.preventDefault()
    let userName=document.getElementById("name").value
    let pass=document.getElementById("password").value
    let data=JSON.parse(localStorage.getItem("details"))
    for(let i=0; i<data.length; i++){
        if(userName==data[i].user_name&& pass==data[i].password){
        alert("Login Successfully")
        return
        }
    }
    alert("Wrong username or password")
}