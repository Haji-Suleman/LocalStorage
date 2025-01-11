let name = localStorage.username;
let nameC = document.getElementById("name");
nameC.innerText = name;
let logout = document.getElementById("logout");
if(name){
    document.getElementsByTagName("ul")[0].style.display = "flex";
}
else{
    if(confirm("You Have to login first")){
        window.location.href ="login.html";
    }
}
logout.addEventListener("click" ,  () => {
    nameC.innerText = "";
    document.getElementsByTagName("ul")[0].style.display = "none";
    window.location.href = "http://127.0.0.1:3000/logout.html";
});