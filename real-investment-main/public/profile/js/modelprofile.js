function load() {
  var wrapper1 = document.getElementById('FirstName');
  var wrapper2 = document.getElementById('Address');
  var wrapper3 = document.getElementById('Email');
 // var wrapper4 = document.getElementById('Phone')
  //var wrapper5 = document.getElementById('LastName')
  

  let user = JSON.parse(localStorage.getItem("user"));

  let input1 = document.createElement("input");
  input1.id = "FirstNameInput";
  input1.value = user.firstName+" "+user.lastName;//<------prablem---user.lastName(duplicate it self)after refresh or change too html
  wrapper1.prepend(input1);

  let input2 = document.createElement("input");
  input2.id = "AddressInput";
  input2.value = user.address;
  wrapper2.prepend(input2);

  let input3 = document.createElement("input");
  input3.id = "EmailInput";
  input3.value = user.email;
  wrapper3.prepend(input3);
  
  /*not working no phone for user?--->, dosnt existis in localstorage?*/ 
  /*let input4 = document.createElement("input");
  input4.id = "PhoneInput";
  input4.value = user.phone;//
  wrapper4.prepend(input4);*/
  /*                     */
 /* let input5 = document.createElement("input");
  input5.id = "LastNameInput";
  input5.value = user.lastName;//
  wrapper5.prepend(input5);*/
  //var nameInput = document.getElementById('nameInput');

  //nameInput.value = user.firstName;
}
/*Not saveing  phone iunpet problem*/
function save() {
  /*not saveing email and address if you change */
  let FirstNameInput = document.getElementById("FirstNameInput");
  let AddressInput = document.getElementById("AddressInput");
  let EmailInput = document.getElementById("EmailInput");
 // let PhoneInput = document.getElementById("PhoneInput")//?not working 
 // let LastNameInput = document.getElementById("LastNameInput")
 // let nameInput = document.getElementById("nameInput");

  let user = JSON.parse(localStorage.getItem("user"));

  user.firstName = FirstNameInput.value;
 // user.lastName = LastNameInput.value
  user.address = AddressInput.value;
  user.email = EmailInput.value;
 // user.phone = PhoneInput.value;//no phone not working 
  //user.firstName = nameInput.value;
  
  fetch("/users/edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "/users/",
      "Access-Control-Allow-Credentials": true,
      "x-api-key": localStorage.getItem("token")
    },
    body: JSON.stringify(user)//convert an object to JSON respresentive string
  }).then(res => {
    res.json().then(response => {
      if (Math.floor(res.status / 100) !== 2) {
        alert("Error: " + response[0].message)
      } else {
        localStorage.setItem("user", JSON.stringify(response.user))
      }
    }
    )
  }).catch(err => {
    console.log('err: ', err);
  })
}

setTimeout(() => {
  load();
}, 500);
