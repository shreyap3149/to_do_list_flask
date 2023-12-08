
//current_username = username

function validate() {
  var username = document.getElementById("user_name").value;
  var password = document.getElementById("password").value;

  fetch("static/passwords.txt")
    .then((res) => res.text())
    .then((text) => {
      var creds = text.split("\n");
      var notFound = true;
      creds.forEach((line) => {
        var cred = line.split(",");
        if (username == cred[0].trim() && password == cred[1].trim()) {
          console.log(username);
          console.log(cred[0].trim());
          console.log(password);
          console.log(cred[1].trim());

          localStorage.setItem("username", username);
          window.location = "home";
          notFound = false;
          return;
        }
      });
      if (notFound) alert("Incorrect Login Credentials.");
      document.getElementById("user_name").value = ""
      document.getElementById("password").value = ""
    })
    .catch((e) => console.error(e));
}


// Homepage.js
// Homepage.js
document.addEventListener("DOMContentLoaded", function () {
  var username = localStorage.getItem("username");
  console.log("Username from localStorage:", username);

  var container = document.getElementById("WelcomeContainer");

  if (container && username) {
    // Create a new element to display the username
    var welcomeMessage = document.createElement("div");
    welcomeMessage.id = "usernameDisplay";
    welcomeMessage.innerText = "Welcome, " + username + "!";

    container.appendChild(welcomeMessage);
   
   // document.body.appendChild(welcomeMessage);
  } else {
    // Redirect to login page if username is not found
    console.log("not here")
  }
});







/*function validate() {
    var username = document.getElementById("user_name").value;
    var password = document.getElementById("password").value;
  
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {

        var notFound = true;
        users.forEach((user) => {

          if (username === user.username && password === "test") {
            console.log(username);
            window.location = "home";
            notFound = false;
            return;
          }
        });
        if (notFound) alert("Incorrect Login Credentials.");
        document.getElementById("user_name").value = ""
        document.getElementById("password").value = ""
      })
      .catch((e) => console.error(e));

    console.log("here");
  }*/
  
  function logout(){
    window.location = "login";
  }
  