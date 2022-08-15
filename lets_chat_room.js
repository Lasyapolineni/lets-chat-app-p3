//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAB6AaAAeXnXgyJIVXvp3WloBTiDqDDG3c",
    authDomain: "let-s-chat-web-app-8683d.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-8683d-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-8683d",
    storageBucket: "let-s-chat-web-app-8683d.appspot.com",
    messagingSenderId: "199874264146",
    appId: "1:199874264146:web:a26076e59c1a0a9d30338b"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name -" + Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+ "</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function add_room(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
  purpose:"Adding Room Name"
});

localStorage.setItem("room_name", room_name);

window.location="letschat_page.html";
}

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="letschat_page.html";
}