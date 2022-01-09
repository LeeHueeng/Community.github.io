window.onload = function(){

  let today = new Date();
  let lottostart = new Date(2002, 12, 07);

  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let date = today.getDay();

  let nowdays = new Date(year, month, day);
  let endday = new Date(year, month, day, date);

  if(date===6){
    endday = new Date(year, month, day+7, date);
  }
  if(date===5){
    endday = new Date(year, month, day+1, date);
  }
  if(date===4){
    endday = new Date(year, month, day+2, date);
  }
  if(date===3){
    endday = new Date(year, month, day+3, date);
  }
  if(date===2){
    endday = new Date(year, month, day+4, date);
  }
  if(date===1){
    endday = new Date(year, month, day+5, date);
  }
  if(date===0){
    endday = new Date(year, month, day+6, date);
  }

  let ayear = endday.getFullYear();
  let amonth = endday.getMonth();
  let aday = endday.getDate();
  let adate = endday.getDay();
console.log(endday);

if (10 > amonth) {
  amonth = '0' + amonth;
}
if (10 > aday) {
  aday = '0' + aday;
}

  if (10 > month) {
    month = '0' + month;
  }
  if (10 > day) {
    day = '0' + day;
  }


  var lottoday = nowdays.getTime() - lottostart.getTime();
  var lottoround = lottoday / (1000 * 60 * 60 * 24)/7+2;




  var nowday = document.querySelector('.nowday');
  nowday.innerHTML = '발행일 : ' + year + '/' + month + '/' + day;
  var lottodday = document.querySelector('.lottoround');
  lottodday.innerHTML ='제 ' + Math.floor(lottoround) + ' 회';

  var lottoend = document.querySelector('.day');
  lottoend.innerHTML = '발행일 : ' + ayear + '/' + amonth + '/' + aday;
}

function lottoNum(a) {
  for (a = 0; a < 5; a++) {
    let lotto = [];
    let i = 0;
    while (i < 6) {
      let n = Math.floor(Math.random() * 45) + 1;
      if (!sameNum(n, lotto)) {
        lotto.push(n);
        i++;
      }

    }

    if (a === 0) {
      var aresult = document.querySelector('.a-1');
      aresult.textContent = lotto[0];
      var bresult = document.querySelector('.a-2');
      bresult.textContent = lotto[1];
      var cresult = document.querySelector('.a-3');
      cresult.textContent = lotto[2];
      var dresult = document.querySelector('.a-4');
      dresult.textContent = lotto[3];
      var eresult = document.querySelector('.a-5');
      eresult.textContent = lotto[4];
      var fresult = document.querySelector('.a-6');
      fresult.textContent = lotto[5];

    }
    if (a === 1) {
      var aresult = document.querySelector('.b-1');
      aresult.textContent = lotto[0];
      var bresult = document.querySelector('.b-2');
      bresult.textContent = lotto[1];
      var cresult = document.querySelector('.b-3');
      cresult.textContent = lotto[2];
      var dresult = document.querySelector('.b-4');
      dresult.textContent = lotto[3];
      var eresult = document.querySelector('.b-5');
      eresult.textContent = lotto[4];
      var fresult = document.querySelector('.b-6');
      fresult.textContent = lotto[5];

    }

    if (a === 2) {
      var aresult = document.querySelector('.c-1');
      aresult.textContent = lotto[0];
      var bresult = document.querySelector('.c-2');
      bresult.textContent = lotto[1];
      var cresult = document.querySelector('.c-3');
      cresult.textContent = lotto[2];
      var dresult = document.querySelector('.c-4');
      dresult.textContent = lotto[3];
      var eresult = document.querySelector('.c-5');
      eresult.textContent = lotto[4];
      var fresult = document.querySelector('.c-6');
      fresult.textContent = lotto[5];

    }
    if (a === 3) {
      var aresult = document.querySelector('.d-1');
      aresult.textContent = lotto[0];
      var bresult = document.querySelector('.d-2');
      bresult.textContent = lotto[1];
      var cresult = document.querySelector('.d-3');
      cresult.textContent = lotto[2];
      var dresult = document.querySelector('.d-4');
      dresult.textContent = lotto[3];
      var eresult = document.querySelector('.d-5');
      eresult.textContent = lotto[4];
      var fresult = document.querySelector('.d-6');
      fresult.textContent = lotto[5];
    }
    if (a === 4) {
      var aresult = document.querySelector('.e-1');
      aresult.textContent = lotto[0];
      var bresult = document.querySelector('.e-2');
      bresult.textContent = lotto[1];
      var cresult = document.querySelector('.e-3');
      cresult.textContent = lotto[2];
      var dresult = document.querySelector('.e-4');
      dresult.textContent = lotto[3];
      var eresult = document.querySelector('.e-5');
      eresult.textContent = lotto[4];
      var fresult = document.querySelector('.e-6');
      fresult.textContent = lotto[5];

    }



  }





  function sameNum(n, lotto) {
    for (var i = 0; i < lotto.length; i++)
      if (n === lotto[i]) {
        return true;
      }
    return false;
  }
}


function begin() {
  lottoNum();
}
