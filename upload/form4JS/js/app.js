function yolande(event)
{
  // alert("This is an alert")

  event.preventDefault();
  console.log("This page is refreshed");
  var username = document.getElementById("username").value;
  var lastname = document.getElementById("lastname").value;
  console.log(username, lastname);
}


