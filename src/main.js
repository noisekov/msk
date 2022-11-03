const range = document.querySelector(".js-range");
const calcPrice = document.querySelector(".calc__price");
const rangeValue = document.querySelector(".js-range-value");
const calcCost = document.querySelector(".calc__cost");
const benefitSum = document.querySelector(".calc__benefit-sum");

range.addEventListener('input', changeValue);

function changeValue () {
    rangeValue.value = range.value + ' литров';
    let sumOil = +range.value * parseFloat(calcPrice.innerHTML);
    let newSumOil = sumOil.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    calcCost.innerHTML = newSumOil + ' ₽';
    let benefit = +range.value * 49.59;
    let value = parseInt(benefit*100)/100 - sumOil ;
    let rightValue = parseInt(value*100)/ 100;
    let newValue = rightValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    benefitSum.innerHTML = newValue + " ₽";
}


const oilValie = document.querySelector('.js-entre');

//clear field when click
oilValie.addEventListener('click', clearField);

function clearField () {
    oilValie.value = '';
    oilValie.removeEventListener;
}

//change price when writting personal value in input
oilValie.addEventListener('input', changeInput);

function changeInput () {
    let sumOil = +oilValie.value * parseFloat(calcPrice.innerHTML);
    let newSumOil = sumOil.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    calcCost.innerHTML = newSumOil + ' ₽';
    let benefit = +oilValie.value * 49.59;
    let value = parseInt(benefit*100)/100 - sumOil;
    let rightValue = parseInt(value*100)/ 100;
    let newValue = rightValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    benefitSum.innerHTML = newValue + " ₽";
}

//DRY doesn't work i know :)