function setUserToUIProfile(){
    
    let userProfile = JSON.parse(localStorage.getItem("user"));
    document.getElementById("FirstName").innerText = userProfile.firstName;
    document.getElementById("user-full-name").innerText = userProfile.firstName+ " " + user.lastName;
    document.getElementById("Email").innerText = userProfile.email;
    document.getElementById("Address").innerHTML = userProfile.address
    //test
    document.getElementById("hello-user").innerHTML = userProfile.firstName 

  
}