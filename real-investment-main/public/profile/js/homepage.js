function setUserToUIHome(){
    let userHome = JSON.parse(localStorage.getItem("user"));
    document.getElementById("hello-user").innerText = userHome.firstName

   
}