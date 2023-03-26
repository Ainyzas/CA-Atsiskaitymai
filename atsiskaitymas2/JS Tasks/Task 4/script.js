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

        const brandCardModelList = document.createElement("ul");
        brand.models.forEach(model => {
            const brandCardModel = document.createElement("li");
            brandCardModel.classList.add("brandItems");
            brandCardModel.textContent = model;
            brandCardModelList.append(brandCardModel);
        });

        brandCard.append(brandCardModelList);
        output.append(brandCard);
    });
}

displayBrands();
