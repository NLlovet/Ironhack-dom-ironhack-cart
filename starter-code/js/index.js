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

function create() {


  //let newTableRow = document.createElement('tr');
  let tableRf = document.getElementById('taby-body');

  // insert row at end
  let newRow = tableRf.insertRow(-1);

  let name = document.getElementsByTagName('input')[-1];

  newRow.setAttribute('class', 'product');
  //creates each data set
  let newName = document.getElementById('newName').value;
  console.log(`newname ${newName}`);

  let newNum = document.getElementById('newNum').value;

  console.log(`newNum ${newNum}`);

  for (var i = 0; i < 5; i++) {
    let newCell = newRow.insertCell(i);

    console.log(`${i} : ${newCell}`);

    switch (i) {
      //takes name
      case 0:
        newCell.innerHTML = `$<span>${newName}</span>`;
        console.log(newCell.innerHTML);
        newCell.setAttribute('class', 'name');
        break;
        //takes price
      case 1:
        newCell.innerHTML = `$<span>${newNum}</span>`;
        newCell.setAttribute('class', 'pu');
        console.log(newCell.innerHTML);
        break;
        //make quantity
      case 2:
        newCell.setAttribute('class', 'qty');
        let label = 0;
        newCell.innerHTML = `<label>
      <input class="quant" type="number" value="0" min="0">
      </label>
      `;
        break;
      //make subtotal
      case 3:
        newCell.setAttribute('class', 'subtot');
        newCell.innerHTML = `$<span>0</span>`;
        break;
        //sets delete button
      case 4:
        newCell.setAttribute('class', 'rm');
        newCell.innerHTML = `<button class="btn btn-delete"
           onclick="deleteRow(this)">Delete</button>`;
        break;
    }


  }

  /*newTableRow.innerHTML = ('
    <div>
  ');*/





}



$create.onclick = create;
$calc.onclick = calcAll;

