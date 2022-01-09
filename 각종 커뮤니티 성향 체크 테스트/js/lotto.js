function lottoNum() {
  let lotto = [];
  let i = 0;
  while (i < 6) {
    let n = Math.floor(Math.random() * 45) + 1;
    if (!sameNum(n)) {
      lotto.push(n);
      i++;
    }

    result(lotto);
  }





  function sameNum(n) {
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



function result(lotto) {
  console.log(lotto);
  let aresult = document.getElementById('.a-1').lotto[0];
  var aresult = document.querySelector('.a-1');
  var bresult = document.querySelector('.a-2');
  var cresult = document.querySelector('.a-3');
  var dresult = document.querySelector('.a-4');
  var eresult = document.querySelector('.a-5');
  var fresult = document.querySelector('.a-6');
  aresult.innerHTML = lotto[0]
  bresult.innerHTML = lotto[1]
  cresult.innerHTML = lotto[2]
  dresult.innerHTML = lotto[3]
  eresult.innerHTML = lotto[4]
  fresult.innerHTML = lotto[5]





}
