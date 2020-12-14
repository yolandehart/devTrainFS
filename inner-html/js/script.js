function submitForm(event) { 
  event.preventDefault();

  let firstname = document.getElementById('name1').value;
  let lastname = document.getElementById('name2').value;
  let fathersname = document.getElementById('name3').value;
  let mothersname = document.getElementById('name4').value;

  let myData = {firstname, lastname, fathersname, mothersname};
  console.log(myData);
  let array = [];
  array.push(myData);
  console.log(array);

  localStorage.setItem("myData", JSON.stringify(array));

  // inner html display 
  document.getElementById('firstName').innerHTML="first name";

  document.getElementById('lastName').innerHTML="last name";

  document.getElementById('fathersName').innerHTML="fathers name";

  document.getElementById('mothersName').innerHTML="mothers name";


   

}
















