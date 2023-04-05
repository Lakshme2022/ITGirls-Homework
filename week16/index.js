
const form = document.forms.form;
const makers = form.elements.makers;
const models = form.elements.models;
const conditions = form.elements.condition;
const ownersNumber = document.getElementById('ownersNumber');
const fuel = form.elements.fuel;
const owners = form.elements.owners;
const year = form.elements.year;
const payment = form.elements.payment;

function CHOOSE(){

    if(makers.value === "kia"){
        models.innerHTML = `<option value="ceed">Ceed</option>
       <option value="rio">Rio</option>
       <option value="soul">Soul</option>
       <option value="sportage">Sportage</option>`
    }
    if(makers.value === "honda"){
        models.innerHTML = `<option value="accord">Accord</option>
    <option value="civic">Civic</option>
    <option value="crv">CR-V</option>
    <option value="odyssey">Odyssey</option>`
    }
    if(makers.value === "renault") {
        models.innerHTML = `<option value="clio">Clio</option>
    <option value="duster">Duster</option>
    <option value="logan">Logan</option>
    <option value="megan">Megan</option>`
    }
    if(makers.value === "volkswagen") {
        models.innerHTML = `<option value="golf">Golf</option>
    <option value="polo">Polo</option>
    <option value="tiguan">Tiguan</option>
    <option value="touareg">Touareg</option>`
    };
}

CHOOSE();

makers.addEventListener("change", CHOOSE);

function OWNERS(e){

    if(e.target.value === "new"){
        ownersNumber.innerHTML = "";
    }
    if(e.target.value === "old"){
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










//
// <h1>Оценочная стоимость:</h1>
// <h1 class="result_price"></h1>
// <h3>Марка:</h3>
// <div class="result_makes"></div>
// <h3>Модель:</h3>
// <div class="result_model"></div>
// <h3>Тип топлива:</h3>
// <div class="result_fuel"></div>
// <h3>Год производства:</h3>
// <div class="result_year"></div>