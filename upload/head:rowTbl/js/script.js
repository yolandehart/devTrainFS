function createTable(event){
  event.preventDefault();

  let form = document.querySelector("form");

  // table header
  let tbltg = document.createElement("table");
  let trtg = document.createElement("tr");
  let thtg1 = document.createElement("th");
  let thtg2 = document.createElement("th");
  let thtg3 = document.createElement("th");
  let thtg4 = document.createElement("th");
  tbltg.setAttribute("border", "1");

    tbltg.appendChild(trtg);
    trtg.appendChild(thtg1);
    trtg.appendChild(thtg2);
    trtg.appendChild(thtg3);
    trtg.appendChild(thtg4);
    console.log(tbltg);

    thtg1.innerHTML="<h5>COMPANY NAME</h5>";
    thtg2.innerHTML="<h5>WEBSITE URL</h5>";
    thtg3.innerHTML="<h5>PRODUCT ID</h5>";
    thtg4.innerHTML="<h5>PRODUCT QTY</h5>";

  let showtable = document.getElementById("myTable");
  // console.log(tbltg);

  // table row
  let tbody_tg = document.createElement("tbody");
  let tr_tg = document.createElement("tr");
  let td_tg1 = document.createElement("td");
  let td_tg2 = document.createElement("td");
  let td_tg3 = document.createElement("td");
  let td_tg4 = document.createElement("td");

    tbody_tg.appendChild(tr_tg);
    tr_tg.appendChild(td_tg1);
    tr_tg.appendChild(td_tg2);
    tr_tg.appendChild(td_tg3);
    tr_tg.appendChild(td_tg4);

    td_tg1.innerHTML = "Hart Coded";
    td_tg2.innerHTML = "wwww.hart-coded.com";
    td_tg3.innerHTML = "PQ135";
    td_tg4.innerHTML = "100";

    tbltg.appendChild(tbody_tg);
    showtable.appendChild(tbltg);
    console.log(tbltg);




}  





