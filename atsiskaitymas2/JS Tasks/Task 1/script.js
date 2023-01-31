/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
const input = document.querySelector("#search");
const output = document.querySelector("#output");

function convert(e) {
    e.preventDefault();
    output.innerHTML = "";
    if (Math.sign(input.value) === -1 || isNaN(input.value)) {
        alert("Input should be a positive number");
    } else {
        const kg = input.value;

        const lb = kg * 2.2046;
        const lbOutput = document.createElement("div");
        lbOutput.textContent = lb + " lb";

        const g = kg / 0.001;
        const gOutput = document.createElement("div");
        gOutput.textContent = g + " g";

        const oz = kg * 35.274;
        const ozOutput = document.createElement("div");
        ozOutput.textContent = oz + " oz";

        output.append(lbOutput, gOutput, ozOutput);
    }
    input.value = "";
}

document.querySelector("form").addEventListener("submit", convert);
