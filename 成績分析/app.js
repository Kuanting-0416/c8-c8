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
  //按下enter部會回傳表單
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
  NewInput1.setAttribute("list", "opt");
  NewInput1.classList.add("class-type");

  let NewInput2 = document.createElement("input");
  NewInput2.setAttribute("type", "text");
  NewInput2.classList.add("class-number");

  let NewInput3 = document.createElement("input");
  NewInput3.setAttribute("type", "number");
  NewInput3.setAttribute("min", "0");
  NewInput3.setAttribute("max", "6");
  NewInput3.classList.add("class-credits");

  let newSelect = document.createElement("select");
  newSelect.classList.add("select");
  var opt1 = document.createElement("option");
  opt1.setAttribute("value", "");
  let textNode1 = document.createTextNode("");
  opt1.appendChild(textNode1);
  var opt2 = document.createElement("option");
  opt2.setAttribute("value", "A");
  let textNode2 = document.createTextNode("A");
  opt2.appendChild(textNode2);
  var opt3 = document.createElement("option");
  opt3.setAttribute("value", "A-");
  let textNode3 = document.createTextNode("A-");
  opt3.appendChild(textNode3);
  var opt4 = document.createElement("option");
  opt4.setAttribute("value", "B+");
  let textNode4 = document.createTextNode("B+");
  opt4.appendChild(textNode4);
  var opt5 = document.createElement("option");
  opt5.setAttribute("value", "B");
  let textNode5 = document.createTextNode("B");
  opt5.appendChild(textNode5);
  var opt6 = document.createElement("option");
  opt6.setAttribute("value", "B-");
  let textNode6 = document.createTextNode("B-");
  opt6.appendChild(textNode6);
  var opt7 = document.createElement("option");
  opt7.setAttribute("value", "C+");
  let textNode7 = document.createTextNode("C+");
  opt7.appendChild(textNode7);
  var opt8 = document.createElement("option");
  opt8.setAttribute("value", "C");
  let textNode8 = document.createTextNode("C");
  opt8.appendChild(textNode8);
  var opt9 = document.createElement("option");
  opt9.setAttribute("value", "C-");
  let textNode9 = document.createTextNode("C-");
  opt9.appendChild(textNode9);
  var opt10 = document.createElement("option");
  opt10.setAttribute("value", "D+");
  let textNode10 = document.createTextNode("D+");
  opt10.appendChild(textNode10);
  var opt11 = document.createElement("option");
  opt11.setAttribute("value", "D");
  let textNode11 = document.createTextNode("D");
  opt11.appendChild(textNode11);
  var opt12 = document.createElement("option");
  opt12.setAttribute("value", "D-");
  let textNode12 = document.createTextNode("D-");
  opt12.appendChild(textNode12);
  var opt13 = document.createElement("option");
  opt13.setAttribute("value", "F");
  let textNode13 = document.createTextNode("F");
  opt13.appendChild(textNode13);

  newSelect.appendChild(opt1);
  newSelect.appendChild(opt2);
  newSelect.appendChild(opt3);
  newSelect.appendChild(opt4);
  newSelect.appendChild(opt5);
  newSelect.appendChild(opt6);
  newSelect.appendChild(opt7);
  newSelect.appendChild(opt8);
  newSelect.appendChild(opt9);
  newSelect.appendChild(opt10);
  newSelect.appendChild(opt11);
  newSelect.appendChild(opt12);
  newSelect.appendChild(opt13);

  newSelect.addEventListener("change", (e) => {
    setGPA();
    changeColor(e.target);
  });

  let NewButton = document.createElement("button");
  NewButton.classList.add("trash-button");
  let NewItag = document.createElement("i");
  NewItag.classList.add("fas");
  NewItag.classList.add("fa-trash");
  NewButton.appendChild(NewItag);

  NewButton.addEventListener("click", (e) => {
    e.preventDefault(); /*按下後不會提交整張表單*/
    e.target.parentElement.parentElement.style.animation =
      "scaleDown 0.5s ease forwards";
    e.target.parentElement.parentElement.addEventListener(
      "animationend",
      (e) => {
        e.target.remove();
        setGPA();
      }
    );
  });

  /*子元素添加到父元素最後一個*/
  NewDiv.appendChild(NewInput1);
  NewDiv.appendChild(NewInput2);
  NewDiv.appendChild(NewInput3);
  NewDiv.appendChild(newSelect);
  NewDiv.appendChild(NewButton);
  NewForm.appendChild(NewDiv);

  document.querySelector(".All-input").appendChild(NewForm);
  NewInput3.addEventListener("change", () => {
    setGPA();
  });
  NewForm.style.animation = "scaleup 0.5s ease forwards";
  /*宣告.style.animation = (名稱(自己宣告的 時間 效果 最後停留在最後一針))*/
});

let allTrash = document.querySelectorAll(".trash-button"); // 選取所有 class="trash-button" 的按鈕
allTrash.forEach((trash) => {
  /*當有button被按下時，會去刪除那一個所屬的父元素*/
  trash.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.classList.add("remove");
  });
});

allTrash.forEach((trash) => {
  let form = trash.parentElement.parentElement;
  form.addEventListener("transitionend", (e) => {
    e.target.remove();
    setGPA;
  });
});

//升降排序法
let btn1 = document.querySelector(".sort-descending");
let btn2 = document.querySelector(".sort-ascending");

btn1.addEventListener("click", () => {
  handlesorting("descending"); //降序
});
btn2.addEventListener("click", () => {
  handlesorting("ascending"); //升序
});

function handlesorting(direction) {
  let grader = document.querySelectorAll("div.grader"); //選取元素
  let objectArray = []; //建立空陣列，用來存放物件
  for (let i = 0; i < grader.length; i++) {
    let class_name = grader[i].children[0].value;
    let class_number = grader[i].children[1].value;
    let class_credit = grader[i].children[2].value;
    let class_grade = grader[i].children[3].value;
    if (
      !(
        class_name == "" &&
        class_number == "" &&
        class_credit == "" &&
        class_grade == ""
      )
    ) {
      let class_object = {
        class_name,
        class_number,
        class_credit,
        class_grade,
      };
      objectArray.push(class_object);
    }
  }
  for (let i = 0; i < objectArray.length; i++) {
    objectArray[i].class_grade_number = convertor(objectArray[i].class_grade);
  }

  objectArray = mergeSort(objectArray);
  console.log("objectArray", objectArray);
  if (direction == "descending") {
    objectArray = objectArray.reverse();
  }
  let allInputs = document.querySelector(".All-input");
  allInputs.innerHTML = ""; //清空All-input資料

  for (let i = 0; i < objectArray.length; i++) {
    allInputs.innerHTML += `<form>
  <div class="grader">
    <input
    type="text"
    placeholder="class category"
    class="class-type"
    list="opt"
    value=${objectArray[i].class_name}
    /><!----><input
    type="text"
    placeholder="class-number"
    class="class-number"
    value=${objectArray[i].class_number}
    /><!----><input
    type="number"   
    placeholder="credits"
    max="6"
    min="0"
    class="class-credits"
    value=${objectArray[i].class_credit}
    /><!----><select name="select" class="select">
    <option value=""></option>
    <option value="A">A</option>y5
    <option value="A-">A-</option>
    <option value="B+">B+</option>
    <option value="B">B</option>
    <option value="B-">B-</option>
    <option value="C+">C+</option>
    <option value="C">C</option>
    <option value="C-">C-</option>
    <option value="D+">D+</option>
    <option value="D">D</option>
    <option value="D-">D-</option>
    <option value="F">F</option>
    </select><!----><button class="trash-button">
    <!--垃圾桶-->
    <i class="fas fa-trash"></i>
    </button>
  </div>
</form>`;
  }
  garders = document.querySelectorAll(".All-garder");
  for (let i = 0; i < garders.length; i++) {
    garders[i].children[3].value = objectArray[i].class_grade;
  }
}

function merge(a1, a2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < a1.length && j < a2.length) {
    if (a1[i].class_grade_number > a2[j].class_grade_number) {
      result.push(a2[j]);
      j++;
    } else {
      result.push(a1[i]);
      i++;
    }
  }

  while (i < a1.length) {
    result.push(a1[i]);
    i++;
  }
  while (j < a2.length) {
    result.push(a2[j]);
    j++;
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length == 0) {
    return [];
  }
  if (arr.length == 1) {
    return arr;
  } else {
    let middle = Math.floor(arr.length / 2); //返還一個比X還小的整數
    let left = arr.slice(0, middle); //slice 回傳新陣列 回傳0-中間值
    let right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
  }
}
