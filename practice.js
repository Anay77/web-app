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
  firebase.initializeApp(firebaseConfig);firebase.initializeApp(firebaseConfig);
  function addUser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      });
  }