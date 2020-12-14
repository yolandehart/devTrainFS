function yolande(event)
{
  event.preventDefault();
  console.log("Refreshing");
  var username = document.getElementById("name1").value;
  var lastname = document.getElementById("name2").value;
  var fathername = document.getElementById("name3").value; 
  var mothername = document.getElementById("name4").value;
  var cityname = document.getElementById("city").value;
  var dob = document.getElementById("dob").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;

  var myData={username, lastname,fathername, mothername, cityname, dob, gender};
  console.log(myData);
    var array=[];

    array.push(myData);

    //  console.log(array);

    localStorage.setItem("myData", JSON.stringify(array));


  
  // console.log(username, lastname, fathername, mothername, cityname, dob, gender);

}