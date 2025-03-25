let hero = document.querySelector(".hero");
let slider = document.querySelector(".slider");
let animation = document.querySelector("section.animation-wrapper");

const time_line = new TimelineMax(); /*創建時間軸*/
time_line
  .fromTo(
    hero,
    1.2,
    { height: "0%" },
    { height: "100%", ease: Power2.easeInOut }
  )
  .fromTo(
    hero,
    1.2,
    { width: "80%" },
    { width: "100%", ease: Power2.easeInOut }
  )
  .fromTo(
    slider,
    1,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(animation, 0.3, { opacity: 1 }, { opacity: 0 }); //透明度由1轉0
setTimeout(() => {
  animation.style.pointerEvents = "none"; // 3.3秒後animation無法點擊
}, 3300);

window.addEventListener("keydown", (e) => {
  //按下enter不會回傳表單
  if (e.key === "Enter") {
    e.preventDefault(); // 防止預設行為
  }
});

let Allbuttons = document.querySelectorAll("button"); //宣告所有button
Allbuttons.forEach((button) => {
  //這個變數內每個都會跑一遍
  button.addEventListener("click", (e) => {
    e.preventDefault(); //'防止預設行為(按下後回傳表單)
  });
});

let allSelect = document.querySelectorAll("select");
allSelect.forEach((select) => {
  select.addEventListener("change", (e) => {
    setGPA(); //宣告的變數，用來改變顏色
    changeColor(e.target);
  });
});

let credits = document.querySelectorAll(".class-credits");
credits.forEach((credits) => {
  credits.addEventListener("change", () => {
    setGPA();
  });
});

function changeColor(target) {
  if (target.value == "A" || target.value == "A-") {
    target.style.backgroundColor = "lightgreen";
  } else if (
    target.value == "B" ||
    target.value == "B+" ||
    target.value == "B-"
  ) {
    target.style.backgroundColor = "orange";
    target.style.color = "black";
  } else if (
    target.value == "C" ||
    target.value == "C+" ||
    target.value == "C-"
  ) {
    target.style.backgroundColor = "blue";
    target.style.color = "black";
  } else if (
    target.value == "D" ||
    target.value == "D+" ||
    target.value == "D-"
  ) {
    target.style.backgroundColor = "red";
    target.style.color = "black";
  } else if (target.value == "F") {
    target.style.backgroundColor = "grey";
    target.style.color = "white";
  } else {
    target.style.backgroundColor = "white";
  }
}
function convertor(grade) {
  switch (grade) {
    case "A":
      return 4.0;
    case "A-":
      return 3.7;
    case "B+":
      return 3.4;
    case "B":
      return 3.0;
    case "B-":
      return 2.7;
    case "C+":
      return 2.4;
    case "C":
      return 2.0;
    case "C-":
      return 1.7;
    case "D+":
      return 1.4;
    case "D":
      return 1.0;
    case "D-":
      return 0.7;
    case "F":
      return 0.0;
    default:
      return 0;
  }
}

function setGPA() {
  let fromLenght = document.querySelectorAll("form").length; //監察並回傳
  let credits = document.querySelectorAll(".class-credits"); //監察並回傳 所有class = class-credits
  let selects = document.querySelectorAll("select"); //監察並回傳 所有select的
  let sum = 0; //分子
  let creditSum = 0; //分母
  for (let i = 0; i < credits.length; i++) {
    //執行迴圈加總所有class-credits
    if (!isNaN(credits[i].valueAsNumber)) {
      creditSum += credits[i].valueAsNumber;
    }
  }
  for (let i = 0; i < fromLenght; i++) {
    if (!isNaN(credits[i].valueAsNumber)) {
      sum = sum + credits[i].valueAsNumber * convertor(selects[i].value);
    }
  }
  let result;
  if (creditSum == 0) {
    result = (0.0).toFixed(2);
  } else {
    result = (sum / creditSum).toFixed(2);
  }
  document.getElementById("result-gpa").innerText = result;
}

let addButton = document.querySelector(".plus-btn");
addButton.addEventListener("click", () => {
  let NewForm = document.createElement("form");
  let NewDiv = document.createElement("div");
  NewDiv.classList.add("grader");
  //創建五個小元素
  let NewInput1 = document.createElement("input");
  NewInput1.setAttribute("type", "text");
});
