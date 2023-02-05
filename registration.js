function eventCreation(form,hostname,address,event,party) {
  if(localStorage.getItem("logged") != "true")
  {
    window.location.href="signup.html";
  }
  // var hostname = document.getElementById("hostname");
  // var address = document.getElementById("address");
  // var description = document.getElementById("event")
  // var partymembers = document.getElementById("party");
  // var phonenumbers = document.getElementById("phone");
  
  // cell1.innerHTML = "test"
  form = document.getElementById("regisform");
  hostname = document.getElementById("hostname");
  address = document.getElementById("address");
  description = document.getElementById("event")
  partymembers = document.getElementById("party");
  phonenumbers = document.getElementById("phone");
  window.location.href = "eventspage.html";
  var table = document.getElementById("events");
  
  // var row = document.createElement("tr");
  // var cell1 = document.createElement("td")
  // var textnode1=document.createTextNode("address");
  // cell1.appendChild(textnode1);
  // row.appendChild(cell1);
  // table.appendChild(row);
  // var cell2 = row.insertCell(1);
  // var cell3 = row.insertCell(2);
  // var cell4 = row.insertCell(3);
  // cell1.innerHTML = address + "event";
  // cell2.innnerHTML = party;
  // cell2.innerHTML = address; 
  // cell3.innerHTML = "Sign up Here";
  // cell4.innerHTML = event;
}
