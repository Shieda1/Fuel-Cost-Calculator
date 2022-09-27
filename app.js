// https://www.omnicalculator.com/everyday-life/fuel-cost

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const tripcostRadio = document.getElementById('tripcostRadio');
const distanceRadio = document.getElementById('distanceRadio');
const fuelefficiencyRadio = document.getElementById('fuelefficiencyRadio');
const fuelpriceRadio = document.getElementById('fuelpriceRadio');

let tripcost;
let distance = v1;
let fuelefficiency = v2;
let fuelprice = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

tripcostRadio.addEventListener('click', function() {
  variable1.textContent = 'Distance';
  variable2.textContent = 'Fuel efficiency';
  variable3.textContent = 'Fuel price';
  distance = v1;
  fuelefficiency = v2;
  fuelprice = v3;
  result.textContent = '';
});

distanceRadio.addEventListener('click', function() {
  variable1.textContent = 'Trip cost';
  variable2.textContent = 'Fuel efficiency';
  variable3.textContent = 'Fuel price';
  tripcost = v1;
  fuelefficiency = v2;
  fuelprice = v3;
  result.textContent = '';
});

fuelefficiencyRadio.addEventListener('click', function() {
  variable1.textContent = 'Trip cost';
  variable2.textContent = 'Distance';
  variable3.textContent = 'Fuel price';
  tripcost = v1;
  distance = v2;
  fuelprice = v3;
  result.textContent = '';
});

fuelpriceRadio.addEventListener('click', function() {
  variable1.textContent = 'Trip cost';
  variable2.textContent = 'Distance';
  variable3.textContent = 'Fuel efficiency';
  tripcost = v1;
  distance = v2;
  fuelefficiency = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(tripcostRadio.checked)
    result.textContent = `Trip cost = ${computetripcost().toFixed(2)}`;

  else if(distanceRadio.checked)
    result.textContent = `Distance = ${computedistance().toFixed(2)}`;

  else if(fuelefficiencyRadio.checked)
    result.textContent = `Fuel efficiency = ${computefuelefficiency().toFixed(2)}`;

  else if(fuelpriceRadio.checked)
    result.textContent = `Fuel price = ${computefuelprice().toFixed(2)}`;
})

// calculation

// tripcost = (distance / fuelefficiency) * fuelprice

function computetripcost() {
  return (Number(distance.value) / Number(fuelefficiency.value)) * Number(fuelprice.value);
}

function computedistance() {
  return (Number(tripcost.value) / Number(fuelprice.value)) * Number(fuelefficiency.value);
}

function computefuelefficiency() {
  return Number(distance.value) / (Number(tripcost.value) / Number(fuelprice.value));
}

function computefuelprice() {
  return Number(tripcost.value) / (Number(distance.value) / Number(fuelefficiency.value));
}