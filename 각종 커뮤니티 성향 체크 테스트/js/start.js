const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 12;
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function calResult() {
  var result = select.indexOf(Math.max(...select));
  return result;
}

function setResult(){
  let point = calResult();
  const resultName = document.querySelector('.resultname');
  resultName.innerHTML = infoList[point].name;


  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  var imgURL = 'img/image-' + point + '.png';
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList[point].desc;
}

function goResult(){
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block"
    }, 450)})
    setResult();
}


function imgeNext(qIdx, idx) {
  let leftImage = document.querySelector('.leftImage');
  let rightImge = document.querySelector('.rightImge');

  leftImage.disabled = true;
  leftImage.classList.remove('fadeIn');
  leftImage.classList.add('fadeOut');



  rightImge.disabled = true;
  rightImge.classList.remove('fadeIn');
  rightImge.classList.add('fadeOut');


  setTimeout(() => {
    if (qIdx + 1 === endPoint) {
      goResult();
      return;
    }
    else {
      setTimeout(() => {

      var target = qnaList[qIdx].a[idx].type;


        for(let i = 0; i <= target.length; i++){
                console.log(select);
        select[target[i]] += 1;
    

        }
        leftImage.style.display = 'none';
        rightImge.style.display = 'none';
        goNext(++qIdx);
      }, 450)
    }
  }, 450)



}

function goNext(qIdx){
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;

  var status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint) * (qIdx+1) + '%';
  status.innerHTML = qIdx+1;

  let qnaURL = './img/question/0';
  let leftURL = qnaURL + '-A.png';
  let rightURL = qnaURL + '-B.png';

  let leftImage = document.querySelector('.leftImage');
  let rightImge = document.querySelector('.rightImge');
  leftImage.src = leftURL;
  rightImge.src = rightURL;
  leftImage.style.display = 'block';
  rightImge.style.display = 'block';

  leftImage.classList.remove('fadeOut');
  rightImge.classList.remove('fadeOut');

  leftImage.classList.add('fadeIn');
  rightImge.classList.add('fadeIn');

  leftImage.addEventListener("click", function() {
    imgeNext(qIdx, 0);

  }, false);
  rightImge.addEventListener("click", function() {
    imgeNext(qIdx, 1);
  }, false);


}

function begin() {
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block";
    }, 450);
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}
