var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $create = document.getElementById('create');

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

function create (){

  //Sets first TD to product
  let product = document.getElementsByClassName('new')[0];
  let ok = product.getAttributeNode('class');
  product.removeAttributeNode(ok);

  product.setAttribute('class', 'product');
  console.log(product)
  // product.removeAttribute('class');


  //allows to delete
  let create = document.getElementById('create');
  
  create.setAttribute('onclick', 'deleteRow(this)');
  create.setAttribute('class', 'btn');
  document.getElementById('create').className += " btn-delete";
  create.removeAttribute('id');
  create.innerText = "Delete";

  //sets product name
  let name = document.getElementsByTagName('td')[10];
  console.log(name)
  name.setAttribute('value', '');
  name.setAttribute('class', 'name');
  let content = document.getElementsByTagName('td')[10].value;
  console.log(content)
  document.getElementsByTagName('td')[10].innerHTML = content;
}

$create.onclick = create;
$calc.onclick = calcAll;

