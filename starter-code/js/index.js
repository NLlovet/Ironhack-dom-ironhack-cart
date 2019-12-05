var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  let priceUnit = document.getElementsByClassName('pu');
  let num = priceUnit[1].innerText;

  num = priceUnit[1].innerText.replace('$', "")
  let price = parseFloat(num);
  console.log(price);
  
  let quantity = document.getElementById('quant');
  let currentQ = quantity.value;
  let numQ = parseInt(currentQ)
  console.log(currentQ);

  let subtot = document.getElementsByClassName('subtot');
  subtot.innerText = "";
  subtot[1].innerText = `$${numQ * price}`;

  return `${numQ * price}`;
}

function calcAll() {
  // Iteration 1.2
  let all = document.getElementsByClassName('product');
  let ar = [];

  let result = 0;
  console.log(`ALL length is : ${all.length}`)
 
  for (var i = 0; i < all.length; i++) {
    let t = updateSubtot(all)
    result = all[i];
  }
 
  // console.log(all);

console.log(result);

  let total = document.getElementById('total');

  // total.innerText = result; 
}

$calc.onclick = calcAll;