var positionX = 0;
var positionY = 0;
var velocityY = 50;
var velocityX = 50;
// ball1
var positionX1 = 0;
var positionY1 = 0;
var velocityY1 = 60;
var velocityX1 = 60;
// ball2
var positionX2 = 0;
var positionY2 = 0;
var velocityY2 = 70;
var velocityX2 = 70;
// ball3
var positionX3 = 0;
var positionY3 = 0;
var velocityY3 = 80;
var velocityX3 = 80;
// ball4
var positionX4 = 0;
var positionY4 = 0;
var velocityY4 = 90;
var velocityX4 = 90;
// ball5
var positionX5 = 0;
var positionY5 = 0;
var velocityY5 = 100;
var velocityX5 = 100;
// ball6
var positionX6 = 0;
var positionY6 = 0;
var velocityY6 = 110;
var velocityX6 = 110;

var body = document.getElementById("body");
var ball = document.getElementById("ball");
var ball1 = document.getElementById("ball1");
var ball2 = document.getElementById("ball2");
var ball3 = document.getElementById("ball3");
var ball4 = document.getElementById("ball4");
var ball5 = document.getElementById("ball5");
var ball6 = document.getElementById("ball6");

var reverseX = false;
var reverseY = false;

// ball1
var reverseX1 = false;
var reverseY1 = false;
// ball2
var reverseX2 = false;
var reverseY2 = false;
// ball3
var reverseX3 = false;
var reverseY3 = false;
// ball4
var reverseX4 = false;
var reverseY4 = false;
// ball5
var reverseX5 = false;
var reverseY5 = false;
// ball6
var reverseX6 = false;
var reverseY6 = false;

var Xmin = 0;
var Ymin = 0;
var Xmax = 1200;
var Ymax = 300;

// ball1
var Xmin1 = 0;
var Ymin1 = 0;
var Xmax1 = 1200;
var Ymax1 = 300;
// ball2
var Xmin2 = 0;
var Ymin2 = 0;
var Xmax2 = 1200;
var Ymax2 = 300;
// ball3
var Xmin3 = 0;
var Ymin3 = 0;
var Xmax3 = 1200;
var Ymax3 = 300;
// ball4
var Xmin4 = 0;
var Ymin4 = 0;
var Xmax4 = 1200;
var Ymax4 = 300;
// ball5
var Xmin5 = 0;
var Ymin5 = 0;
var Xmax5 = 1200;
var Ymax5 = 300;
// ball6
var Xmin6 = 0;
var Ymin6 = 0;
var Xmax6 = 1200;
var Ymax6 = 300;

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
function chcolorbody() {
  var r = randomNumber(55, 200);
  var g = randomNumber(0, 255);
  var b = randomNumber(0, 255);

  body.style.background = "rgb(" + r + "," + r + "," + r + ")";
}

function chcolor() {
  var r = randomNumber(55, 200);
  var g = randomNumber(0, 255);
  var b = randomNumber(0, 255);

  ball.style.background = "rgb(" + r + "," + r + "," + r + ")";
}

function chsize() {
  var blsz = randomNumber(30, 700);
  ball.style.width = blsz + "px";
  ball.style.height = blsz + "px";
}

function chborder() {
  ball.style.borderRadius = randomNumber(30, 50) + "%";
}

function moveBall() {
  if (reverseX === false) {
    positionX = positionX + velocityX;
    ball.style.left = positionX + "px";
  } else {
    positionX = positionX - velocityX;
    ball.style.left = positionX + "px";
  }

  if (reverseY === false) {
    positionY = positionY + velocityY;
    ball.style.top = positionY + "px";
  } else {
    positionY = positionY - velocityY;
    ball.style.top = positionY + "px";
  }

  if (positionY > Ymax || positionY === Ymin) {
    reverseY = !reverseY;
  }

  if (positionX > Xmax || positionX === Xmin) {
    reverseX = !reverseX;
  }
}

setInterval(chcolorbody, 750);

setInterval(chcolor, 900);
setInterval(moveBall, 100);
setInterval(chborder, 900);
setInterval(chsize, 1000);
// ball1/////////////////////////////////
function chcolor1() {
  var r = randomNumber(55, 200);
  var g = randomNumber(0, 255);
  var b = randomNumber(0, 255);

  ball1.style.background = "rgb(" + r + "," + r + "," + r + ")";
}

function chsize1() {
  var blsz = randomNumber(30, 700);
  ball1.style.width = blsz + "px";
  ball1.style.height = blsz + "px";
}

function chborder1() {
  ball1.style.borderRadius = randomNumber(30, 50) + "%";
}

function moveBall1() {
  if (reverseX1 === false) {
    positionX1 = positionX1 + velocityX1;
    ball1.style.left = positionX1 + "px";
  } else {
    positionX1 = positionX1 - velocityX1;
    ball1.style.left = positionX + "px";
  }

  if (reverseY1 === false) {
    positionY1 = positionY1 + velocityY1;
    ball1.style.top = positionY1 + "px";
  } else {
    positionY1 = positionY1 - velocityY1;
    ball1.style.top = positionY1 + "px";
  }

  if (positionY1 > Ymax1 || positionY1 === Ymin1) {
    reverseY1 = !reverseY1;
  }

  if (positionX1 > Xmax1 || positionX1 === Xmin1) {
    reverseX1 = !reverseX1;
  }
}

setInterval(chcolor1, 900);
setInterval(moveBall1, 100);
setInterval(chborder1, 900);
setInterval(chsize1, 1000);
// ball2/////////////////////////////////
function chcolor2() {
  var r = randomNumber(55, 200);
  var g = randomNumber(0, 255);
  var b = randomNumber(0, 255);

  ball2.style.background = "rgb(" + r + "," + r + "," + r + ")";
}

function chsize2() {
  var blsz = randomNumber(30, 700);
  ball2.style.width = blsz + "px";
  ball2.style.height = blsz + "px";
}

function chborder2() {
  ball2.style.borderRadius = randomNumber(30, 50) + "%";
}

function moveBall2() {
  if (reverseX2 === false) {
    positionX2 = positionX2 + velocityX2;
    ball2.style.left = positionX2 + "px";
  } else {
    positionX2 = positionX2 - velocityX2;
    ball2.style.left = positionX2 + "px";
  }

  if (reverseY2 === false) {
    positionY2 = positionY + velocityY;
    ball2.style.top = positionY + "px";
  } else {
    positionY2 = positionY2 - velocityY2;
    ball2.style.top = positionY2 + "px";
  }

  if (positionY2 > Ymax || positionY2 === Ymin) {
    reverseY2 = !reverseY2;
  }

  if (positionX2 > Xmax || positionX2 === Xmin) {
    reverseX2 = !reverseX2;
  }
}

// setInterval(chcolorbody, 750);

setInterval(chcolor2, 900);
setInterval(moveBall2, 100);
setInterval(chborder2, 900);
setInterval(chsize2, 1000);
// ball3/////////////////////////////////
function chcolor3() {
  var r = randomNumber(55, 200);
  var g = randomNumber(0, 255);
  var b = randomNumber(0, 255);

  ball3.style.background = "rgb(" + r + "," + r + "," + r + ")";
}

function chsize3() {
  var blsz = randomNumber(30, 700);
  ball3.style.width = blsz + "px";
  ball3.style.height = blsz + "px";
}

function chborder3() {
  ball3.style.borderRadius = randomNumber(30, 50) + "%";
}

function moveBall3() {
  if (reverseX3 === false) {
    positionX3 = positionX3 + velocityX3;
    ball3.style.left = positionX3 + "px";
  } else {
    positionX3 = positionX3 - velocityX3;
    ball3.style.left = positionX3 + "px";
  }

  if (reverseY3 === false) {
    positionY3 = positionY3 + velocityY3;
    ball3.style.top = positionY3 + "px";
  } else {
    positionY3 = positionY3 - velocityY3;
    ball3.style.top = positionY3 + "px";
  }

  if (positionY3 > Ymax || positionY3 === Ymin) {
    reverseY3 = !reverseY3;
  }

  if (positionX3 > Xmax || positionX3 === Xmin) {
    reverseX3 = !reverseX3;
  }
}

// setInterval(chcolorbody, 750);

setInterval(chcolor3, 900);
setInterval(moveBall3, 100);
setInterval(chborder3, 900);
setInterval(chsize3, 1000);
// ball4/////////////////////////////////
function chcolor4() {
  var r = randomNumber(55, 200);
  var g = randomNumber(0, 255);
  var b = randomNumber(0, 255);

  ball4.style.background = "rgb(" + r + "," + r + "," + r + ")";
}

function chsize4() {
  var blsz = randomNumber(30, 700);
  ball4.style.width = blsz + "px";
  ball4.style.height = blsz + "px";
}

function chborder4() {
  ball4.style.borderRadius = randomNumber(30, 50) + "%";
}

function moveBall4() {
  if (reverseX4 === false) {
    positionX4 = positionX4 + velocityX4;
    ball4.style.left = positionX4 + "px";
  } else {
    positionX4 = positionX4 - velocityX4;
    ball4.style.left = positionX4 + "px";
  }

  if (reverseY4 === false) {
    positionY4 = positionY4 + velocityY4;
    ball4.style.top = positionY4 + "px";
  } else {
    positionY4 = positionY4 - velocityY4;
    ball4.style.top = positionY4 + "px";
  }

  if (positionY4 > Ymax || positionY4 === Ymin) {
    reverseY4 = !reverseY4;
  }

  if (positionX4 > Xmax || positionX4 === Xmin) {
    reverseX4 = !reverseX4;
  }
}

// setInterval(chcolorbody, 750);

setInterval(chcolor4, 900);
setInterval(moveBall4, 100);
setInterval(chborder4, 900);
setInterval(chsize4, 1000);
// ball5/////////////////////////////////
function chcolor5() {
  var r = randomNumber(55, 200);
  var g = randomNumber(0, 255);
  var b = randomNumber(0, 255);

  ball5.style.background = "rgb(" + r + "," + r + "," + r + ")";
}
5;
function chsize5() {
  var blsz = randomNumber(30, 700);
  ball5.style.width = blsz + "px";
  ball5.style.height = blsz + "px";
}

function chborder5() {
  ball5.style.borderRadius = randomNumber(30, 50) + "%";
}

function moveBall5() {
  if (reverseX5 === false) {
    positionX5 = positionX6 + velocityX6;
    ball5.style.left = positionX5 + "px";
  } else {
    positionX5 = positionX5 - velocityX6;
    ball5.style.left = positionX5 + "px";
  }

  if (reverseY5 === false) {
    positionY5 = positionY5 + velocityY5;
    ball5.style.top = positionY5 + "px";
  } else {
    positionY5 = positionY5 - velocityY6;
    ball5.style.top = positionY5 + "px";
  }

  if (positionY5 > Ymax5 || positionY5 === Ymin5) {
    reverseY5 = !reverseY5;
  }

  if (positionX5 > Xmax5 || positionX5 === Xmin5) {
    reverseX5 = !reverseX5;
  }
}

// setInterval(chcolorbody, 750);

setInterval(chcolor5, 900);
setInterval(moveBall5, 100);
setInterval(chborder5, 900);
setInterval(chsize5, 1000);
// ball6/////////////////////////////////
function chcolor6() {
  var r = randomNumber(55, 200);
  var g = randomNumber(0, 255);
  var b = randomNumber(0, 255);

  ball6.style.background = "rgb(" + r + "," + r + "," + r + ")";
}

function chsize6() {
  var blsz = randomNumber(30, 700);
  ball6.style.width = blsz + "px";
  ball6.style.height = blsz + "px";
}

function chborder6() {
  ball6.style.borderRadius = randomNumber(30, 50) + "%";
}

function moveBall6() {
  if (reverseX6 === false) {
    positionX6 = positionX6 + velocityX6;
    ball6.style.left = positionX6 + "px";
  } else {
    positionX6 = positionX6 - velocityX6;
    ball6.style.left = positionX6 + "px";
  }

  if (reverseY6 === false) {
    positionY6 = positionY6 + velocityY6;
    ball6.style.top = positionY6 + "px";
  } else {
    positionY6 = positionY6 - velocityY6;
    ball6.style.top = positionY6 + "px";
  }

  if (positionY6 > Ymax6 || positionY6 === Ymin6) {
    reverseY6 = !reverseY6;
  }

  if (positionX6 > Xmax6 || positionX6 === Xmin6) {
    reverseX6 = !reverseX6;
  }
}

// setInterval(chcolorbody, 750);

setInterval(chcolor6, 900);
setInterval(moveBall6, 100);
setInterval(chborder6, 900);
setInterval(chsize6, 1000);
