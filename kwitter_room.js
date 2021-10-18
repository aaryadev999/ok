
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

    document.getElementById("youcanalways_goaround").innerHTML = "Welcome " + user_name;

    function addJhonny(){
         var jhoonny_romming_around = document.getElementById("jhonny_logs_in").value;
         firebase.database().ref("/").child(jhoonny_romming_aroun).update({
               purpose : "adding user"
         });
    }

function jhonnyadds(){
      var room_name= document.getElementById("jhonny_is_the_input").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding a jhoony like room"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("out").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_name = childKey;
       console.log("Roomie"+ room_name);
       row = "<div class='jhonny_trends_on_yt' id="+room_name+" onclick='rederectToRoomName(this.id)'>#"+room_name+ "</div><hr>";
       document.getElementById("out").innerHTML += row
      });});}
getData();

function logout_jhonny(){
      window.location = "index.html";
}