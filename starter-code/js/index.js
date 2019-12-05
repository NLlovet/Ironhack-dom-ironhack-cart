var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  let priceUnit = document.getElementsByClassName('pu');
  let num = priceUnit[0].innerText;
  num = priceUnit[0].innerText.replace('$', "")
  let price = parseFloat(num);
  console.log(price);
  
  let quantity = document.getElementById('quant');
  let currentQ = quantity.value;
  let numQ = parseInt(currentQ)
  console.log(currentQ);

  let subtot = document.getElementsByClassName('subtot');
  subtot.innerText = "";
  subtot[0].innerText = `$${numQ * price}`;

  return `${numQ * price}`;
}

function calcAll() {
  // Iteration 1.2
  let all = document.getElementsByClassName('product');
  // console.log(all);
  let total = document.getElementById('total');
  let result = updateSubtot(all);
  total.innerText = result; 
}

$calc.onclick = calcAll;