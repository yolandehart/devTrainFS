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
  let firstname = document.getElementById('firstName');
  firstName.innerHTML=firstname;
  let lastname = document.getElementById('lastName');
  lastName.innerHTML=lastname;
  let fathersname = document.getElementById('fathersName');
  fathersName.innerHTML=fathersname;
  let mothersname = document.getElementById('mothersName');
  mothersName.innerHTML=mothersname;


   

}
















