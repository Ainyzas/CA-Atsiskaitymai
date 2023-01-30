/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

const output = document.querySelector("#output");

async function displayBrands() {
    const response = await fetch(ENDPOINT);
    const data = await response.json();

    data.forEach(brand => {
        const brandCard = document.createElement("div");
        brandCard.classList.add("brand");

        const brandCardName = document.createElement("h2");
        brandCardName.classList.add("brandName");
        brandCardName.textContent = brand.brand;
        brandCard.append(brandCardName);

        const models = brand.models;
        models.forEach(model => {
            const brandCardModel = document.createElement("h4");
            brandCardModel.classList.add("brandItems");
            brandCardModel.textContent = model;
            brandCard.append(brandCardModel);
        });

        output.append(brandCard);
    });
}

displayBrands();
