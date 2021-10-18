let butoane = document.getElementById("butoane");
let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");
let button4 = document.getElementById("btn4");
let button5 = document.getElementById("btn5");
let button6 = document.getElementById("btn6");
let button7 = document.getElementById("btn7");
let button8 = document.getElementById("btn8");
let button9 = document.getElementById("btn9");
let btnReset = document.getElementById("btn-reset");
let btnX = document.getElementById("btn-x");
let btnO = document.getElementById("btn-o");
let pText = document.getElementById("text");
let weapon;
function switch_btn(valoare) {
  button1.disabled = valoare;
  button2.disabled = valoare;
  button3.disabled = valoare;
  button4.disabled = valoare;
  button5.disabled = valoare;
  button6.disabled = valoare;
  button7.disabled = valoare;
  button8.disabled = valoare;
  button9.disabled = valoare;
}
switch_btn(true);

// Choosing the weapon
btnX.addEventListener("click", () => {
  weapon = "X";
  switch_btn(false);
});
btnO.addEventListener("click", () => {
  weapon = "O";
  switch_btn(false);
});

function changeWeapon() {
  if (weapon === "X") {
    weapon = "O";
  } else {
    weapon = "X";
  }
  pText.innerHTML = weapon;
}

button1.addEventListener("click", () => {
  button1.innerText = weapon;
  verificaCastig();
  changeWeapon();
  button1.disabled = true;
});
button2.addEventListener("click", () => {
  button2.innerText = weapon;
  verificaCastig();
  changeWeapon();
  button2.disabled = true;
});
button3.addEventListener("click", () => {
  button3.innerText = weapon;
  verificaCastig();
  changeWeapon();
  button3.disabled = true;
});
button4.addEventListener("click", () => {
  button4.innerText = weapon;
  verificaCastig();
  changeWeapon();
  button4.disabled = true;
});
button5.addEventListener("click", () => {
  button5.innerText = weapon;
  verificaCastig();
  changeWeapon();
  button5.disabled = true;
});
button6.addEventListener("click", () => {
  button6.innerText = weapon;
  verificaCastig();
  changeWeapon();
  button6.disabled = true;
});
button7.addEventListener("click", () => {
  button7.innerText = weapon;
  verificaCastig();
  changeWeapon();
  button7.disabled = true;
});
button8.addEventListener("click", () => {
  button8.innerText = weapon;
  verificaCastig();
  changeWeapon();
  button8.disabled = true;
});
button9.addEventListener("click", () => {
  button9.innerText = weapon;
  verificaCastig();
  changeWeapon();
  button9.disabled = true;
});

btnReset.onclick = function () {
  location.reload();
};

let verificaCastig = () => {
  let compare1 =
    button1.innerText === button2.innerText &&
    button2.innerText === button3.innerText &&
    button1.innerText != "";
  let compare2 =
    button4.innerText === button5.innerText &&
    button5.innerText === button6.innerText &&
    button4.innerText != "";
  let compare3 =
    button7.innerText === button8.innerText &&
    button8.innerText === button9.innerText &&
    button7.innerText != "";

  let compare4 =
    button1.innerText === button4.innerText &&
    button4.innerText === button7.innerText &&
    button1.innerText != "";
  let compare5 =
    button2.innerText === button5.innerText &&
    button5.innerText === button8.innerText &&
    button2.innerText != "";
  let compare6 =
    button3.innerText === button6.innerText &&
    button6.innerText === button9.innerText &&
    button3.innerText != "";
  let compare7 =
    button1.innerText === button5.innerText &&
    button5.innerText === button9.innerText &&
    button1.innerText != "";
  let compare8 =
    button3.innerText === button5.innerText &&
    button5.innerText === button7.innerText &&
    button3.innerText != "";
  console.log(
    compare1,
    compare2,
    compare3,
    compare4,
    compare4,
    compare5,
    compare6,
    compare7,
    compare8
  );
  if (
    compare1 ||
    compare2 ||
    compare3 ||
    compare4 ||
    compare5 ||
    compare6 ||
    compare7 ||
    compare8
  ) {
    alert(`${weapon} a castigat!`);
    window.location.reload();
  }
};
