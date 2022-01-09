function lottoNum() {
  let lotto = [];
  let i = 0;

  while (i < 6) {
    let n = Math.floor(Math.random() * 45) + 1;
    if (!sameNum(n)) {
      lotto.push(n);
      i++;
    }
  }

  function sameNum(n) {
    for (var i = 0; i < lotto.length; i++)
      if (n === lotto[i]) {return true;
      }
    return false;
  }

  console.log(lotto);
}

function begin(){
  lottoNum();
}



function result(){

}
