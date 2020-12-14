function getImage(event) {
 event.preventDefault();

 let img = document.createElement("img");  // creates tag
// img.setAttribute("src","img/img1.jpeg"); // creates attribute
 img.setAttribute("src","img/img" + Math.round(Math.random()*2)+".jpeg");
// set image size & height
 img.setAttribute("width", "200");
//  box is the parent of button
 let box = document.getElementById("box");
 box.appendChild(img);
}

function removeImage(event) {
  event.preventDefault();
  let box = document.getElementById("box");
  box.innerHTML=" ";
 }
 
 function removeAll(event) {
  let box = document.getElementById("box");
  box.innerHTML=" ";
 }




// <img src="./img/img1.jpeg" width="200" />
// src = attribute name img = attribute value