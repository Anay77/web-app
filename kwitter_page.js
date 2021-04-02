//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAf08Wk4E_DpvJTtpycnWhekcnSSzA23C8",
      authDomain: "kwitter-dd356.firebaseapp.com",
      databaseURL: "https://kwitter-dd356-default-rtdb.firebaseio.com",
      projectId: "kwitter-dd356",
      storageBucket: "kwitter-dd356.appspot.com",
      messagingSenderId: "754606604355",
      appId: "1:754606604355:web:5ddaf932e0e8d0197814f6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=meassage_data['like'];
name_with_tag="<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'> "+ message +"</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
 span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
  row = name_with_tag + message_with_tag +like_button + span_with_tag;
 document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function updateLike(message_id){
console.log("clicked on the like button "+message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
 console.log(updated_likes);
  firebase.database().ref(room_name).child(message_id).update({
         like : updated_likes });
         function logout() { localStorage.removeItem("user_name"); localStorage.removeItem("room_name"); window.location.replace("index.html"); }
}