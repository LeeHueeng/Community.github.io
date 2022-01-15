let resamara = 0;
let legendary_character = [0, 0];
let ancent_character = [0, 0];
let epic_character = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let rare_character = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let common_character = [0, 0, 0, 0, 0, 0, 0];
const main = document.querySelector("#main");
const second = document.querySelector("#second");

window.onload=function(){
  //실행할 내용
}



function rollback(){

  second.style.animation = "fadeOut 1s";
  setTimeout(() => {
    main.style.animation = "fadeIn 1s";

    setTimeout(() => {
      second.style.display = "none";
      main.style.display = "block";

    }, 450)

  }, 450)

}



function chack(){

for(i=1;i<3;i++){
document.getElementById('legendary_'+i).textContent = legendary_character[i-1] + "개";
}

for(i=1;i<3;i++){
document.getElementById('ancient_'+i).textContent = ancent_character[i-1] + "개";
}

for(i=1;i<38;i++){
document.getElementById('epic_'+i).textContent = epic_character[i-1] + "개";
}
for(i=1;i<15;i++){
document.getElementById('rare_'+i).textContent = rare_character[i-1] + "개";
}
for(i=1;i<8;i++){
document.getElementById('common_'+i).textContent = common_character[i-1] + "개";
}







  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    second.style.animation = "fadeIn 1s";

    setTimeout(() => {
      main.style.display = "none";
      second.style.display = "block";

    }, 450)

  }, 450)

}



function begin() {
  resamara++;

  for (i = 0; i < 10; i++) {
    var gachya = Math.random();
    console.log(legendary_character);
    console.log(ancent_character);
    console.log(epic_character);
    console.log(rare_character);
    console.log(common_character);


    if (gachya < 0.61763) {
      if (0 < gachya && gachya < 0.0181) {
        if (Math.random() < 0.5) {
          var souleandcharacter = Math.floor(Math.random() * 12 + 1);

          if (souleandcharacter < 10) {
            var character = Math.floor(Math.random() * 2 + 1);
            document.getElementById("img_" + i).src = "./img/cooki/ancient_soulston/" + character + ".png"
            document.getElementById("img_" + i).style.backgroundColor = "#ecffc9"
            legendary_character[character-1] += 1;

          } else {
            var character = Math.floor(Math.random() * 2 + 1);
            document.getElementById("img_" + i).src = "./img/cooki/ancient/" + character + ".png"
            document.getElementById("img_" + i).style.backgroundColor = "#ecffc9"
            legendary_character[character-1] += 20;

          }
        } else {
          var souleandcharacter = Math.floor(Math.random() * 12 + 1);

          if (souleandcharacter < 10) {
            var character = Math.floor(Math.random() * 2 + 1);
            document.getElementById("img_" + i).src = "./img/cooki/ancient_soulston/" + character + ".png"
            document.getElementById("img_" + i).style.backgroundColor = "#d79bff"
            ancent_character[character-1] += 1;
          } else {
            var character = Math.floor(Math.random() * 2 + 1);
            document.getElementById("img_" + i).src = "./img/cooki/ancient/" + character + ".png"
            document.getElementById("img_" + i).style.backgroundColor = "#d79bff"
            ancent_character[character-1] += 20;
          }
        }
      }
      if (0.0181 <= gachya && gachya < 0.21608) {

        var souleandcharacter = Math.floor(Math.random() * 12 + 1);

        if (souleandcharacter < 10) {
          var character = Math.floor(Math.random() * 37 + 1);
          document.getElementById("img_" + i).src = "./img/cooki/epic_soulston/" + character + ".png"
          document.getElementById("img_" + i).style.backgroundColor = "#ffafc6"
          epic_character[character-1] += 1;
        } else {
          var character = Math.floor(Math.random() * 37 + 1);
          document.getElementById("img_" + i).src = "./img/cooki/epic/" + character + ".png"
          document.getElementById("img_" + i).style.backgroundColor = "#ffafc6"
          epic_character[character-1] += 20;
        }

      }
      if (gachya >= 0.21608) {


        var souleandcharacter = Math.floor(Math.random() * 12 + 1);

        if (souleandcharacter < 10) {
          var character = Math.floor(Math.random() * 14 + 1);
          document.getElementById("img_" + i).src = "./img/cooki/rare_soulston/" + character + ".png"
          document.getElementById("img_" + i).style.backgroundColor = "#c3e5f3"
          rare_character[character-1] += 1;
        } else {
          var character = Math.floor(Math.random() * 14 + 1);
          document.getElementById("img_" + i).src = "./img/cooki/rare/" + character + ".png"
          document.getElementById("img_" + i).style.backgroundColor = "#c3e5f3"
          rare_character[character-1] += 20;
        }
      }
    } else {
      var souleandcharacter = Math.floor(Math.random() * 12 + 1);

      if (souleandcharacter < 10) {
        var character = Math.floor(Math.random() * 7 + 1);
        document.getElementById("img_" + i).src = "./img/cooki/common_soulston/" + character + ".png"
        document.getElementById("img_" + i).style.backgroundColor = "#efefef"
        common_character[character-1] += 1;
      } else {

        var character = Math.floor(Math.random() * 7 + 1);
        document.getElementById("img_" + i).src = "./img/cooki/common/" + character + ".png"
        document.getElementById("img_" + i).style.backgroundColor = "#efefef"
        common_character[character-1] += 20;
      }
    }
  }

  var money = document.getElementById('money');
  money.textContent = "현실이셨으면 당신은 " + resamara * 3000 + "💎를 사용하셨어요.!";
  console.log(resamara);
}


function rebegin() {
  resamara = 0;
  var money = document.getElementById('money');
  money.textContent = "현실이셨으면 당신은 0💎를 사용하셨어요.!";

 legendary_character = [0, 0];
 ancent_character = [0, 0];
epic_character = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
 rare_character = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
common_character = [0, 0, 0, 0, 0, 0, 0];



  for (i = 0; i < 10; i++) {
    document.getElementById("img_" + i).src = "./img/cooki/cooki1.png"
    document.getElementById("img_" + i).style.backgroundColor = "transparent";
  }
}



function dia_change() {
  var dia_change_1 = document.getElementById('cooki_dia').value;

  console.log(dia_change_1);
  document.getElementById('cooki_gold').value = dia_change_1 * 25;
  document.getElementById('korea_money').value = dia_change_1 * 12;
}



function gold_change() {
  var gold_change_1 = document.getElementById('cooki_gold').value;

  document.getElementById('cooki_dia').value = gold_change_1 / 25;
  document.getElementById('korea_money').value = gold_change_1 / 25 / 12;
}




function money_change() {
  var korea_money_1 = document.getElementById('korea_money').value;

  document.getElementById('cooki_dia').value = korea_money_1 * .08333333333333333333333333333333;
  document.getElementById('cooki_gold').value = korea_money_1 * 2.083333333333333;
}
