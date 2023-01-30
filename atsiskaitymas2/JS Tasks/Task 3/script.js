/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const button = document.querySelector("#btn");
const output = document.querySelector("#output");
const message = document.querySelector("#message");

async function handleButton() {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    data.forEach(user => {
        const userCard = document.createElement("div");
        userCard.classList.add("userCard");

        const userLogin = document.createElement("h2");
        userLogin.textContent = user.login;

        const userImg = document.createElement("img");
        userImg.src = user.avatar_url;
        userImg.classList.add("imgOutput");

        userCard.append(userLogin, userImg);
        output.append(userCard);
    });
    message.style.display = "none";
}

button.addEventListener("click", handleButton);
