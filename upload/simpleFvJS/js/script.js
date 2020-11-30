function submitFunction(event) {
  event.preventDefault();
  
  // id = getElementById 
  let username = document.getElementById("username");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let address = document.getElementById("address");
  let zip = document.getElementById("zip");

  // select = 
  let country = document.getElementById("country");
  let dob = document.getElementById("dob");

  // checkbox = querySelector 
  let gender = document.querySelector('input[name="gender"]'); 

  // console.log(email.value)

  // dsiplayy error
  if (username.value== "") {
  let error_name= document.getElementById('error-name')
   error_name.innerHTML = " Please Enter Your Name *";
   error_name.style.color="red";
   username.style.borderColor="red";
}
  if (email.value== "") {
   let error_email= document.getElementById('error-email')
   error_email.innerHTML = " Please Enter Your Email *";
   error_email.style.color="red";
   email.style.borderColor="red";
}

  if (phone.value== "") {
  let error_phone= document.getElementById('error-phone')
   error_phone.innerHTML = " Please Enter Your Phone *";
   error_phone.style.color="red";
   phone.style.borderColor="red";
}

  if (address.value== "") {
    let error_address= document.getElementById('error-address')
    error_address.innerHTML = " Please Enter Your Phone *";
    error_address.style.color="red";
    address.style.borderColor="red";
} 
 
  if (zip.value== "") {
   let error_zip= document.getElementById('error-zip')
    error_zip.innerHTML = " Please Enter Your Zip Code *";
    error_zip.style.color="red";
    zip.style.borderColor="red";
} 

  
if(name.length<1 || email.length<1 || phone.length<1 || address.length<1 || zip.length<1){
  return false;
} 


//   let myData={username, email, phone, address, zip, country, dob, gender,};
//   let array=[];
//   array.push(myData);

//   console.log(array);

}



  