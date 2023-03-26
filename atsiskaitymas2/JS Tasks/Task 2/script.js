/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const button = document.querySelector("#btn__element");
const state = document.querySelector("#btn__state");

let counter = 0;

function processClick() {
    counter++;
    state.textContent = counter;
}

button.addEventListener("click", processClick);
