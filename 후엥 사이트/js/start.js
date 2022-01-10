const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 12;
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


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






function goNext(qIdx ) {
  let per = qIdx;
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[per].q;

  var status = document.querySelector('.statusBar');
  status.style.width = (100 / endPoint) * (per + 1) + '%';
  status.innerHTML = per + 1;

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
    imgeNext(per, 0);

  }, false);
  return 0;
  rightImge.addEventListener("click", function() {
    imgeNext(per, 1);

  }, false);
  return 0;

}






function imgeNext(per, xdx) {
  let leftImage = document.querySelector('.leftImage');
  let rightImge = document.querySelector('.rightImge');

  leftImage.disabled = true;
  leftImage.classList.remove('fadeIn');
  leftImage.classList.add('fadeOut');



  rightImge.disabled = true;
  rightImge.classList.remove('fadeIn');
  rightImge.classList.add('fadeOut');


  setTimeout(() => {
    if (per + 1 === endPoint) {
      goResult();

    } else {
      let xIdx = per;
      let idx = xdx;
      resultsection(xIdx, xdx);

    }
  }, 450)

}



function resultsection(xIdx, idx) {
  setTimeout(() => {
    var xdx = idx;
    var target = qnaList[xIdx].a[xdx].type;
    for (let i = 0; i <= target.length; i++) {

      select[target[i]] += 1;


    }
    let leftImage = document.querySelector('.leftImage');
    let rightImge = document.querySelector('.rightImge');
    leftImage.style.display = 'none';
    rightImge.style.display = 'none';
    let qIdx = xIdx += 1;
    console.log(select);
    goNext(qIdx);

  }, 450)
}


function goResult() {
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block"
    }, 450)
  })
  setResult();
}






function calResult() {
  var result = select.indexOf(Math.max(...select));
  return result;
}

function setResult() {
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
