const EXPM = document.querySelector("#xperiment-mouse");
const EXPK = document.querySelector("#experiment-keyboard");
const EXPD = document.querySelector("#xperiment-drag");
const CR = document.querySelector("#current-result");
const RL = document.querySelector("#result-list");

const createRow = (str) => {
  const newRow = document.createElement("p");
  newRow.innerText = str;
  return newRow;
};

const createAction = (event) => {
  const type = event.type;
  CR.innerText = type;
  RL.prepend(createRow(type));
};

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

EXPK.addEventListener("keydown", createAction);
EXPK.addEventListener("keypress", createAction);
EXPK.addEventListener("keyup", createAction);
