
const form = document.forms.form;
const makers = form.elements.makers;
const models = form.elements.models;
const conditions = form.elements.condition;
const ownersNumber = document.getElementById('ownersNumber');

function CHOOSE(){

    if(makers.value === "Honda"){
        models.innerHTML = `<option value="Accord">Accord</option>
    <option value="Civic">Civic</option>
    <option value="Cr-V">CR-V</option>
    <option value="Odyssey">Odyssey</option>`
    }
    if(makers.value === "Kia"){
        models.innerHTML = `<option value="Ceed">Ceed</option>
       <option value="Rio">Rio</option>
       <option value="Soul">Soul</option>
       <option value="Sportage">Sportage</option>`
    }
    if(makers.value === "Renault") {
        models.innerHTML = `<option value="Clio">Clio</option>
    <option value="Duster">Duster</option>
    <option value="Logan">Logan</option>
    <option value="Megan">Megan</option>`
    }
    if(makers.value === "Volkswagen") {
        models.innerHTML = `<option value="Golf">Golf</option>
    <option value="Polo">Polo</option>
    <option value="Tiguan">Tiguan</option>
    <option value="Touareg">Touareg</option>`
    };
}

CHOOSE();

makers.addEventListener("change", CHOOSE);

let isNew = 0;

function OWNERS(e){

    if(e.target.value === "new"){
        isNew = 0;
        ownersNumber.innerHTML = "";
    }
    if(e.target.value === "old"){
        isNew = 1;
        ownersNumber.innerHTML = `<p>Владельцев по ПТС</p>

    <input type="radio" name="owners" id="1" value="1">
        <label for="1">1</label>
        <input type="radio" name="owners" id="2" value="2">
            <label for="2">2</label>
            <input type="radio" name="owners" id="3" value="3">
                <label for="3">3</label>
                <input type="radio" name="owners" id="4" value="4">
                    <label for="4">4+</label>`
    }
};

for(let cond of conditions){
    cond.addEventListener("change", OWNERS);
}

const makersArray = ['Honda', 'Kia', 'Renault', 'Volkswagen'];
const makersCostArray = [2000000, 1200000, 1000000, 1500000];
const modelsArray = [
    ['Accord', 'Civic', 'Cr-V', 'Odyssey'],
    ['Ceed', 'Rio', 'Soul', 'Sportage'],
    ['Clio', 'Duster', 'Logan', 'Megan'],
    ['Golf', 'Polo', 'Tiguan', 'Touareg']
];
const modelCostModifier = [
    [1.35, 1.4, 1.75, 3],
    [1.17, 1.8, 2, 3.1],
    [1.5, 2, 1.2, 1.6],
    [1.8, 1.13, 1.65, 5.3]
];
const butt = document.getElementById('butt');
const result = document.getElementById('result');
const fuel = form.elements.fuel;
const year = form.elements.year;
const payment = form.elements.payment;

const fuelMod = [
    [0, .07, .05, .03],
    [0, -.02, .03, .01]
];
const fuelArray = ['petrol', 'electrical', 'hybrid', 'diesel',];
const yearArray = ['2023-2020', '2019-2015', '2014-2008', '2007'];
const ownersArray =['1', '2', '3', '4'];
const ownersMod = [.06, .04, .02, 0];
const yearMod = [-.25, -.45, -.60, -.75];

function PRICE() {

    let makerIndex = makersArray.indexOf(makers.value);
    let modelIndex = modelsArray[makerIndex].indexOf(models.value);
    let modelPrice = makersCostArray[makerIndex] * modelCostModifier[makerIndex][modelIndex];

    let fuelIndex = fuelArray.indexOf(fuel.value);

    let Mod = fuelMod[isNew][fuelIndex];

    if (isNew === 1) {
        const owners = form.elements.owners;
        let ownersIndex = ownersArray.indexOf(owners.value);
        let yearIndex = yearArray.indexOf(year.value);
        Mod += yearMod[yearIndex];
        Mod += ownersMod[ownersIndex];
    }
    if (payment.value === "cash") {
        Mod -= .05;
    }
    if (payment.value === "entity") {
        Mod += .05;
    }

    let finalPrice = modelPrice + modelPrice * Mod;

    let addResult = `<h2>Оценочная стоимость:</h2>
        <h2 class="result_price">${finalPrice}</h2>
        <h4>Марка:</h4>
        <h4 class="result_makes">${makers.value}</h4>
        <h4>Модель:</h4>
        <h4 class="result_model">${models.value}</h4>
        <h4>Год производства:</h4>
        <h4 class="result_year">${year.value}</h4>
        <h4>Тип топлива:</h4>
        <h4 class="result_fuel">${fuel.value}</h4>`;

    result.innerHTML = addResult;

};

butt.addEventListener('click', PRICE);

