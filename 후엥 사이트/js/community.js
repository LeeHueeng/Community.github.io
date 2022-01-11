const main = document.querySelector("#main");
const writing = document.querySelector("#writing");
var password = document.getElementById('inputPassword2').value;
var email = document.getElementById('email').value;
var user = document.getElementById('user').value;
var story = document.getElementById('story').value;
var title = document.getElementById('title').value;

function begin() {
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    writing.style.animation = "fadeIn 1s";

    setTimeout(() => {
      main.style.display = "none";
      writing.style.display = "block";

    }, 450)

  }, 450)

}


function rebegin() {



  writing.style.animation = "fadeOut 1s";
  setTimeout(() => {
    main.style.animation = "fadeIn 1s";

    setTimeout(() => {
      writing.style.display = "none";
      main.style.display = "block";
      var password = document.getElementById('inputPassword2').value = "";
      var email = document.getElementById('email').value = "";
      var user = document.getElementById('user').value = "";
      var story = document.getElementById('story').value = "";
      var title = document.getElementById('title').value = "";

    }, 450)

  }, 450)

}
