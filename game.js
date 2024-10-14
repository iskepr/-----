// xo
let header = document.querySelector(".header");
let dor = "X";
let boxs = [];
function win(num1, num2, num3, num4) {
  header.innerHTML = `الي كسب ${boxs[num1]}الـ`;
  document.getElementById("box" + num1).style.background = "#047050";
  document.getElementById("box" + num2).style.background = "#047050";
  document.getElementById("box" + num3).style.background = "#047050";
  document.getElementById("box" + num4).style.background = "#047050";

  setTimeout(function () {
    location.reload();
  }, 3000);
  setInterval(function () {
    header.innerHTML += ".";
  }, 800);
}
function winner() {
  for (let i = 1; i < 17; i++) {
    boxs[i] = document.getElementById("box" + i).innerHTML;
  }

  const winningPatterns = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16], // صفوف
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [4, 8, 12, 16], // أعمدة
    [1, 6, 11, 16],
    [4, 7, 10, 13], // أقطار
  ];

  for (let pattern of winningPatterns) {
    let [a, b, c, d] = pattern;
    if (
      boxs[a] === boxs[b] &&
      boxs[b] === boxs[c] &&
      boxs[c] === boxs[d] &&
      boxs[a] != ""
    ) {
      win(a, b, c, d);
      break;
    }
  }

  // التحقق من امتلاء جميع المربعات بدون وجود فائز
  let allFilled = true;
  for (let i = 1; i < 17; i++) {
    if (boxs[i] === "") {
      allFilled = false;
      break;
    }
  }
  // إذا كانت كل المربعات ممتلئة وليس هناك فائز
  if (allFilled) {
    header.innerHTML = "محدش كسب";
    setTimeout(function () {
      location.reload(); // إعادة تحميل الصفحة بعد 4 ثوانٍ
    }, 3000);
    setInterval(function () {
      header.innerHTML += "."; // إضافة النقاط على العنوان كل 800 مللي ثانية
    }, 800);
  }
}

function game(id) {
  let box = document.getElementById(id);

  if (dor === "X" && box.innerHTML == "") {
    box.innerHTML = "O";
    header.innerHTML = `Xدور الـ`;
    dor = "O";
  } else if (dor === "O" && box.innerHTML == "") {
    box.innerHTML = "X";
    header.innerHTML = `Oدور الـ`;
    dor = "X";
  }

  winner();
}
