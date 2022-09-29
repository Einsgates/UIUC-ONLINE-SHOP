/* Your JS here. */
window.onscroll = function() {
  scrollFunction()
  hightlightFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById('logo').style.fontSize = "40px";
    document.getElementById('menu1').style.fontSize = "30px";
    document.getElementById('menu1').style.height = "30px";
    document.getElementById('menu2').style.fontSize = "30px";
    document.getElementById('menu2').style.height = "30px";
    document.getElementById('menu3').style.fontSize = "30px";
    document.getElementById('menu3').style.height = "30px";
    document.getElementById('divider-id').style.height = "58px";
  } else {
    document.getElementById('logo').style.fontSize = "50px";
    document.getElementById('menu1').style.fontSize = "40px";
    document.getElementById('menu1').style.height = "50px";
    document.getElementById('menu2').style.fontSize = "40px";
    document.getElementById('menu2').style.height = "50px";
    document.getElementById('menu3').style.fontSize = "40px";
    document.getElementById('menu3').style.height = "50px";
    document.getElementById('divider-id').style.height = "72px";
  }
}

function hightlightFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight;
  let scrolled = winScroll / height;
  if (scrolled <= 1/100) {
    document.getElementById('divider-id').style.top = "50px";
  } else {
    document.getElementById('divider-id').style.top = "0";
  }
  if (scrolled <= 50/100) {
    document.getElementById('menu1').style.backgroundColor = "#BD3200";
    document.getElementById('menu2').style.backgroundColor = "#FF4500";
    document.getElementById('menu3').style.backgroundColor = "#FF4500";
  } else if (scrolled <= 70/100) {
    document.getElementById('menu1').style.backgroundColor = "#FF4500";
    document.getElementById('menu2').style.backgroundColor = "#BD3200";
    document.getElementById('menu3').style.backgroundColor = "#FF4500";
  } else {
    document.getElementById('menu1').style.backgroundColor = "#FF4500";
    document.getElementById('menu2').style.backgroundColor = "#FF4500";
    document.getElementById('menu3').style.backgroundColor = "#BD3200";
  }
}

function openModalFunction1() {
  document.getElementById('modal-id1').style.display = "block";
  document.getElementById('tooltip-btn1').style.display = "none";
}

function closeModalFunction1() {
  document.getElementById('modal-id1').style.display = "none";
  document.getElementById('tooltip-btn1').style.display = "block";
}

function openModalFunction2() {
  document.getElementById('modal-id2').style.display = "block";
  document.getElementById('tooltip-btn2').style.display = "none";
}

function closeModalFunction2() {
  document.getElementById('modal-id2').style.display = "none";
  document.getElementById('tooltip-btn2').style.display = "block";
}

function openModalFunction3() {
  document.getElementById('modal-id3').style.display = "block";
  document.getElementById('tooltip-btn3').style.display = "none";
}

function closeModalFunction3() {
  document.getElementById('modal-id3').style.display = "none";
  document.getElementById('tooltip-btn3').style.display = "block";
}

function openModalFunction4() {
  document.getElementById('modal-id4').style.display = "block";
  document.getElementById('tooltip-btn4').style.display = "none";
}

function closeModalFunction4() {
  document.getElementById('modal-id4').style.display = "none";
  document.getElementById('tooltip-btn4').style.display = "block";
}

function openModalFunction5() {
  document.getElementById('modal-id5').style.display = "block";
  document.getElementById('tooltip-btn5').style.display = "none";
}

function closeModalFunction5() {
  document.getElementById('modal-id5').style.display = "none";
  document.getElementById('tooltip-btn5').style.display = "block";
}

function openModalFunction6() {
  document.getElementById('modal-id6').style.display = "block";
  document.getElementById('tooltip-btn6').style.display = "none";
}

function closeModalFunction6() {
  document.getElementById('modal-id6').style.display = "none";
  document.getElementById('tooltip-btn6').style.display = "block";
}

function openModalFunction7() {
  document.getElementById('modal-id7').style.display = "block";
  document.getElementById('tooltip-btn7').style.display = "none";
}

function closeModalFunction7() {
  document.getElementById('modal-id7').style.display = "none";
  document.getElementById('tooltip-btn7').style.display = "block";
}

function openModalFunction8() {
  document.getElementById('modal-id8').style.display = "block";
  document.getElementById('tooltip-btn8').style.display = "none";
}

function closeModalFunction8() {
  document.getElementById('modal-id8').style.display = "none";
  document.getElementById('tooltip-btn8').style.display = "block";
}

function openModalFunction9() {
  document.getElementById('modal-id9').style.display = "block";
  document.getElementById('tooltip-btn9').style.display = "none";
}

function closeModalFunction9() {
  document.getElementById('modal-id9').style.display = "none";
  document.getElementById('tooltip-btn9').style.display = "block";
}

