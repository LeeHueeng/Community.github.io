function begin() {
  var percent = 1 - 0.01 * document.getElementById('percent').value;
  var attempts = document.getElementById('attempts').value;
  var krw = document.getElementById('krw').value;
  var percent__1 = document.getElementById('percent').value;


  var result1 = 1 - percent ** attempts;
  var result2 = percent ** attempts;

  console.log(result2);
  if (result1 === 0) {
    return;
  }

  var status = document.querySelector('.resultpercent');
  status.style.width = 100 * result1 + '%';
  var resultpercent = document.querySelector('.result')
  if (result1 === 1) {
    result1 = 100;
  }
  resultpercent.innerHTML = result1 * 100 + '%';








  var result_2 = document.querySelector('.result_2');
  result_2.style.width = 100 * result2 + '%';

  var result_3 = document.querySelector('.result_3')
  if (result2 === 1) {
    result2 = 100;
  }
  result_3.innerHTML = result2 + '%';


  var money = document.querySelector('.money')
  var money_1 = document.querySelector('.money_1')
  var money_2 = document.querySelector('.money_2')
  money.innerHTML = '당신의 가차비용은 "' +krw*attempts +'" 원입니다.';
  money_1 .innerHTML = percent__1 +'%로' + attempts+ '번 시도했을때 한개이상 나올 확률은' +result1*100 + '% 입니다.';
money_2 .innerHTML =percent__1 +'%로' + attempts+ '번 시도했을때 한번만 나올 확률은' +result2*100 + '% 입니다.';

}
