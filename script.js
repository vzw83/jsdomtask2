const EXPM = document.querySelector("#experiment-mouse");
const EXPK = document.querySelector("#experiment-keyboard");
const EXPD = document.querySelector("#experiment-drag");
const CR = document.querySelector("#current-result");
const RL = document.querySelector("#result-list");

const createRow = (str) => {
  const newRow = document.createElement("p");
  newRow.innerText = str;
  return newRow;
}

const createAction = (event) => {
  const type = event.type;
  CR.innerText = type;
  RL.prepend(createRow(type));
}

const keyPress = (event) => {
  console.dir(event);
  createAction(event);
  if (event.keyCode == 37) {
    EXPK.style.left = `${+EXPK.style.left.split('px')[0] - 5}px`;
  }
  else if (event.keyCode == 38) {
    EXPK.style.top = `${+EXPK.style.top.split('px')[0] - 5}px`;
  }
  else if (event.keyCode == 39) {
    EXPK.style.left = `${+EXPK.style.left.split('px')[0] + 5}px`;
  }
  else if (event.keyCode == 40) {
    EXPK.style.top = `${+EXPK.style.top.split('px')[0] + 5}px`;
  }
}

let dragX = 0;
let dragY = 0;

const drag = (event) => {
  console.log(event);
  createAction(event);
  if (event.type == "dragstart") {
    EXPD.classList.add("dragged");
    dragX = event.clientX
    dragY = event.clientY
  }
  else if (event.type == "dragend") {
    EXPD.classList.remove("dragged");
    EXPD.style.top = `${+EXPD.style.top.split('px')[0] + (event.clientY - dragY)}px`;
    EXPD.style.left = `${+EXPD.style.left.split('px')[0] + (event.clientX - dragX)}px`;
  }
}

EXPM.addEventListener("click", createAction);
EXPM.addEventListener("dblclick", createAction);
EXPM.addEventListener("touchstart", createAction);
EXPM.addEventListener("touchend", createAction);
EXPM.addEventListener("contextmenu", createAction);
EXPM.addEventListener("mouseover", createAction);
EXPM.addEventListener("mouseenter", createAction);
EXPM.addEventListener("mouseleave", createAction);
EXPM.addEventListener("focus", createAction);
EXPM.addEventListener("blur", createAction);

EXPK.addEventListener("keydown", keyPress);
EXPK.addEventListener("keyup", createAction);
EXPK.addEventListener("keypress", createAction);

EXPD.addEventListener("dragstart", drag);
EXPD.addEventListener("dragend", drag);