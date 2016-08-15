// var xhr = new XMLHttpRequest();
// // xhr.open('GET', '../data/employees.json');
// xhr.open('GET', 'data/employees.json');
// xhr.onreadystatechange = function () {
//   if(xhr.readyState === 4 && xhr.status === 200) {
//     var employees = JSON.parse(xhr.responseText);
//     var statusHTML = '<ul class="bulleted">';
//     for (var i=0; i<employees.length; i += 1) {
//       if (employees[i].inoffice === true) {
//         statusHTML += '<li class="in">';
//       } else {
//         statusHTML += '<li class="out">';
//       }
//       statusHTML += employees[i].name;
//       statusHTML += '</li>';
//     }
//     statusHTML += '</ul>';
//     document.getElementById('employeeList').innerHTML = statusHTML;
//   }
// };
// xhr.send();

var xhr = new XMLHttpRequest();
xhr.open('GET', 'data/employees.json');
xhr.onreadystatechange = function(){
  if(xhr.readyState === 4 && xhr.status === 200){
    //JSON.parse takes a string and transforms it into an obj
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1){
      if(employees[i].inoffice===true){
        statusHTML += '<li class="in">';
      } else{
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.send(); //this step sends out the request 

var rooms = new XMLHttpRequest();
rooms.open('GET', 'data/rooms.json');
rooms.onreadystatechange = function(){
  if(rooms.readyState === 4 && rooms.status === 200){
    var roomAll = JSON.parse(rooms.responseText);
    var roomStatus = '<ul class="room">';
    for(var i=0; i < roomAll.length; i++){
      if(roomAll[i].available === true){
        roomStatus += '<li class="empty">';
      }
      else{
        roomStatus += '<li class="full">';
      }
      roomStatus += roomAll[i].room;
      roomStatus += '</li>';
    }
    document.getElementById("roomList").innerHTML = roomStatus;
  }
};

rooms.send();

