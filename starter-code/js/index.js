var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $delet = document.getElementsByClassName('btn-delete');
let all = document.getElementsByClassName('product');
let ar = []; 

function updateSubtot($product) {
  // Iteration 1.1
  for (var i = 0; i < all.length; i++) {
    let priceUnit = document.getElementsByClassName('pu');
    let num = priceUnit[i].innerText;
    
    num = priceUnit[i].innerText.replace('$', "")
    let price = parseFloat(num);
    console.log(price);
    
    let quantity = document.getElementsByClassName('quant')[i];
    let currentQ = quantity.value;
    let numQ = parseInt(currentQ)
    console.log(currentQ);
    
    let subtot = document.getElementsByClassName('subtot');
    subtot.innerText = "";
    subtot[i].innerText = `$${numQ * price}`;
    
    ar.push(numQ * price);
  }
}

function calcAll() {
  // Iteration 1.2

  // let result = updateSubtot(all)
 
  // console.log(all);
  updateSubtot(all);

  let total = document.getElementById('total');

  let result = ar.reduce((sum, num) => {
    return sum + num;
  })

  total.innerText = result; 

  ar.length = 0; 
}

function deleteRow(r) {

  let i = r.parentNode.parentNode.rowIndex;
  document.getElementById("cart").deleteRow(i);

}


$calc.onclick = calcAll;

$delet.onclick = deleteRow;