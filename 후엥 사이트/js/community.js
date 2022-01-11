const main = document.querySelector("#main");
const writing = document.querySelector("#writing");




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
      var inputPassword = document.querySelector('.inputPassword');
      console.log(inputPassword);
    }, 450)

  }, 450)

}
