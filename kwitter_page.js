//YOUR FIREBASE LINKS
var firebaseConfig = { 
apiKey: "AIzaSyBQyjrjTsIQsGMGcgu-cr1HjszcHi5ZWMk", 
authDomain: "testkwitter.firebaseapp.com", 
databaseURL: "https://testkwitter.firebaseio.com", 
projectId: "testkwitter", 
storageBucket: "testkwitter.appspot.com", 
messagingSenderId: "624653701634", 
appId: "1:624653701634:web:2cb9a8bd873f17d92d8d1b" 
}; 
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         name = message_data['name'];
         message = message_data['message'];
         like = like_data['like'];
         name_tick = "<h4>"+name+"<img src= 'tick.png' class= 'tick'></h4>";
         msg = "<h4 class='msg_h4'>"+message+"</h4>";
         like_button = "<button class='btn btn-success' id="+firebase_message_id+"value="+like+"onclick= 'update_like(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><br>";
         row = name_tick + msg + like_button + span_with_tag; 
         document.getElementById("output").innerHTML += row;
      } });  }); }

getData();

function send(){
      msg = document.getElementById("jhonny_input").value;
      firebase.database().ref(room_name).push({
            name: user_name, 
            message:msg,
            like:0
      });
      document.getElementById("jhonny_input").value= "";
}

function update_like(message_id){
      button_id = message_id;
      likes = document.getElementById(button_id).ariaValueMax;
      updated_likes = Number(likes) + 1;

      firebase.database().ref(room_name).child(message_id).update({
            like : update_like
      });
}

function logout_jhonny(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
