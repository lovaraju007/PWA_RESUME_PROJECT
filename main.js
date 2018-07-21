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
  education(data.education);
  techSkills(data.keyskills);
  achievements(data.achievements);
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

  var head_1 = document.createElement("h1");
  head_1.textContent = "Career Objectives:";
  child2.appendChild(head_1);

  child2.appendChild(document.createElement("hr"));

  var info = document.createElement("h3");
  info.textContent = det_1.info;
  child2.appendChild(info);
}

var ch2=document.querySelector(".child2");

function education(det_2){

  var head_2 = document.createElement("h1");
  head_2.textContent = "Education Details:";
  ch2.appendChild(head_2);

  ch2.appendChild(document.createElement("hr"));

  for(i=0;i<det_2.length;i++){
    var deg = document.createElement("h4");
    deg.textContent = det_2[i].degree;
    ch2.appendChild(deg);

    var ul = document.createElement("ul");
    var li1 = document.createElement("li");
    li1.textContent = det_2[i].institute;
    ul.appendChild(li1);
    ch2.appendChild(ul);

    var li2 = document.createElement("li");
    li2.textContent = det_2[i].date;
    ul.appendChild(li2);
    ch2.appendChild(ul);
  }
}

function techSkills(skillinfo){
  var head_3 = document.createElement("h1");
  head_3.textContent = "Technical Skills:";
  ch2.appendChild(head_3);

  ch2.appendChild(document.createElement("hr"));

  var skilldata = document.createElement("table");
  skilldata.border = "1";
  ch2.appendChild(skilldata);

  tabledata="";
  for(i=0;i<skillinfo.length;i++){
    tabledata=tabledata+"<tr><td>"+skillinfo[i].title+"</td><td>"+skillinfo[i].info+"</td></tr>";
  }
  skilldata.innerHTML=tabledata;
}

function achievements(achieve){
  var head_3 = document.createElement("h1");
  head_3.textContent = "Achievements:";
  ch2.appendChild(head_3);

  ch2.appendChild(document.createElement("hr"));

  var ul=document.createElement("ul");
  ch2.appendChild(ul);
  //var li=document.createElement("li");
  listdata="";
  for(i=0;i<achieve.info.length;i++){
    listdata=listdata+"<li>"+achieve.info[i]+"</li>";
  }
    ul.innerHTML=listdata;
}
