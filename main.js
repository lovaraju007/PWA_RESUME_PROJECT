function Loadjson(file,callback) {
  var xml = new XMLHttpRequest();
  xml.overrideMimeType("application/json");
  xml.open("GET",file,true);
  xml.onreadystatechange=function() {
    if(xml.readyState===4 && xml.status== "200"){
      callback(xml.responseText);
    }
  };
  xml.send(null);
}

Loadjson("data.json",function(text) {
  var data = JSON.parse(text);
  console.log(data);
  basics(data.details);
  basics_1(data.career);
})

var child1=document.querySelector(".child1");

function basics(det){
  var image = document.createElement("img");
  image.src = det.image;
  child1.appendChild(image);

  var name = document.createElement("h1");
  name.textContent = det.name;
  child1.appendChild(name);

  var phoneno = document.createElement("h2");
  phoneno.textContent=det.phoneno;
  child1.appendChild(phoneno);

  var email =document.createElement("a");
  email.href ="mailto:lovarajurongala07@gmail.com";
  email.appendChild(document.createElement("h2"));
  email.textContent = det.email;
  child1.appendChild(email);

  var address = document.createElement("h2");
  address.textContent = "Address";
  child1.appendChild(address);

  child1.appendChild(document.createElement("hr"));

  var Address =document.createElement("h2");
  Address.appendChild(document.createElement("p"));
  Address.textContent = det.Address;
  child1.appendChild(Address);
}

var child2=document.querySelector(".child2");

function basics_1(det_1){

  var head = document.createElement("h1");
  head.textContent = "Career Objectives:";
  child2.appendChild(head);

  child2.appendChild(document.createElement("hr"));

  var info = document.createElement("h2");
  info.textContent = det_1.info;
  child2.appendChild(info);
}
