  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD34KRlNTUNVcqA8bSZLzmAT5RXzVQkw8w",
    authDomain: "loginpractice-1d835.firebaseapp.com",
    databaseURL: "https://loginpractice-1d835.firebaseio.com",
    projectId: "loginpractice-1d835",
    storageBucket: "loginpractice-1d835.appspot.com",
    messagingSenderId: "1097435679543",
    appId: "1:1097435679543:web:72ef4af967bd1b5b57e8b2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  //                      Collection/Document
  const docRef = db.doc("users/user");

  const userName = document.querySelector("#userName");
  const userId = document.querySelector("#userId");
  const userEmail = document.querySelector("#userEmail");
  const userPassword = document.querySelector("#userPassword");

  getRealtimeUpdates = function(){
      docRef.onSnapshot(function(doc){
          if(doc && doc.exists){
            const myData = doc.data();
            userName.innerText = myData.userName;
            userId.innerText = myData.userId;
            userEmail.innerText = myData.userEmail;
            userPassword.innerText = myData.userPassword;
          }
      }).catch(function(error){
        console.log("Got an error: ", error);
      });
  }

  //Call functions
  getRealtimeUpdates();

