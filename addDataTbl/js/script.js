function createTable(event){
  event.preventDefault();

  let comp = document.sample.name.value;
  let url = document.sample.url.value;
  let pid = document.sample.pid.value;
  let pqty = document.sample.pqty.value;

  let tr = document.createElement("tr");

  let td1 = tr.appendChild(document.createElement("td"));
  let td2 = tr.appendChild(document.createElement("td"));
  let td3 = tr.appendChild(document.createElement("td"));
  let td4 = tr.appendChild(document.createElement("td"));

  td1.innerHTML=comp;
  td2.innerHTML=url;
  td3.innerHTML=pid;
  td4.innerHTML=pqty;

  document.getElementById("tb1").appendChild(tr);
}
