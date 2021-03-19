
//ADD YOUR FIREBASE LINKS HERE
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
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
