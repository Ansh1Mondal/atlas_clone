console.log("js is running");

function search() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("des");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "des";
    }
  }
}

function ans1() {
  var x = document.getElementById("answer1");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("btn1").innerHTML = "Read Less";
  } else {
    x.style.display = "none";
    x.innerHTML = "this is the answer1";
    document.getElementById("btn1").innerHTML = "Read More...";
  }
}
function ans2() {
  var a = document.getElementById("answer2");
  if (a.style.display === "none") {
    a.style.display = "block";
    document.getElementById("btn2").innerHTML = "Read Less";
  } else {
    a.style.display = "none";
    a.innerHTML = "this is the answer2";
    document.getElementById("btn2").innerHTML = "Read More...";
  }
}
function ans3() {
  var b = document.getElementById("answer3");
  if (b.style.display === "none") {
    b.style.display = "block";
    document.getElementById("btn3").innerHTML = "Read Less";
  } else {
    b.style.display = "none";
    b.innerHTML = "this is the answer3";
    document.getElementById("btn3").innerHTML = "Read More...";
  }
}
function ans4() {
  var c = document.getElementById("answer4");
  if (c.style.display === "none") {
    c.style.display = "block";
    document.getElementById("btn4").innerHTML = "Read Less";
  } else {
    c.style.display = "none";
    c.innerHTML = "this is the answer4";
    document.getElementById("btn4").innerHTML = "Read More...";
  }
}
function ans5() {
  var d = document.getElementById("answer5");
  if (d.style.display === "none") {
    d.style.display = "block";
    document.getElementById("btn5").innerHTML = "Read Less";
  } else {
    d.style.display = "none";
    d.innerHTML = "this is the answer5";
    document.getElementById("btn5").innerHTML = "Read More...";
  }
}
function ans6() {
  var e = document.getElementById("answer6");
  if (e.style.display === "none") {
    e.style.display = "block";
    document.getElementById("btn6").innerHTML = "Read Less";
  } else {
    e.style.display = "none";
    e.innerHTML = "this is the answer6";
    document.getElementById("btn6").innerHTML = "Read More...";
  }
}
function ans7() {
  var f = document.getElementById("answer7");
  if (f.style.display === "none") {
    f.style.display = "block";
    document.getElementById("btn7").innerHTML = "Read Less";
  } else {
    f.style.display = "none";
    f.innerHTML = "this is the answer7";
    document.getElementById("btn7").innerHTML = "Read More...";
  }
}
function ans8() {
  var g = document.getElementById("answer8");
  if (g.style.display === "none") {
    g.style.display = "block";
    document.getElementById("btn8").innerHTML = "Read Less";
  } else {
    g.style.display = "none";
    g.innerHTML = "this is the answer8";
    document.getElementById("btn8").innerHTML = "Read More...";
  }
}
function ans9() {
  var h = document.getElementById("answer9");
  if (h.style.display === "none") {
    h.style.display = "block";
    document.getElementById("btn9").innerHTML = "Read Less";
  } else {
    h.style.display = "none";
    h.innerHTML = "this is the answer9";
    document.getElementById("btn9").innerHTML = "Read More...";
  }
}
function ans10() {
  var i = document.getElementById("answer10");
  if (i.style.display === "none") {
    i.style.display = "block";
    document.getElementById("btn10").innerHTML = "Read Less";
  } else {
    i.style.display = "none";
    i.innerHTML = "this is the answer10";
    document.getElementById("btn10").innerHTML = "Read More...";
  }
}
