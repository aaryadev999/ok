function addIt() {
    user_name = document.getElementById("jhonny_logs_in").value;
    
    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";
}