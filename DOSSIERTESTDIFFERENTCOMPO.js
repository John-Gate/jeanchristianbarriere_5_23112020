//////////////////////////////////////////////////////////////////////
////////essaie button storage
// const storageInput = document.querySelector(".storage");
// const text = document.querySelector(".text");
// const button = document.querySelector(".button");
// const storedInput = localStorage.getItem("textinput");

// if (storageInput) {
//   text.textContent = storedInput;
// }

// storageInput.addEventListener("input", (letter) => {
//   console.log(letter);
//   text.textContent = letter.target.value;
// });

// const saveToLocalStorage = () => {
//   localStorage.setItem("textinput", text.textContent);
// };

// button.addEventListener("click", saveToLocalStorage);

// ++++ HTML QUI VA AVEC

// ESSAI DE BUTTON SAUVEGARDE LOCAL SOTRAGE
// <div class="container bg-primary col-lg-2">
//   <input class="storage mx-auto" type="text" />
//   <p class="text mx-auto">Text</p>
//   <button class="button mx-auto">save</button>
// </div>
//////////////////////////////////////////////////////////////////////









/////////////////////BOUTONS ADD ET REMOVE QUANTITIES
////bouton remove
if (document.readyState == "loading") {
  /// comme script async, va attendre chagement du dom avt de lancer fct
  document.addEventListener("DOMContentLoad", ready);
} else {
  ready();
}
///
function ready() {
  //remove quantities
  let removeCartButtons = document.getElementById("#remove");
  for (let i = 0; i < removeCartButtons.clientHeight; i++) {
    let button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  //add quantities laready selected
  let quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  //bouton add cart
  let addToCartButtons = document.getElementsByClassName("shop-item-button");
  for (let i = 0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }
  // enlever les items quand on appuie sur commander
  document
    .getElementsByClassName("btn-purchase")[0]
    .addEventListener("clik", purchasedCLicked);
}
//function remetre cart a 0 apres achat
function purchasedCicked() {
  //CREER LA PAGE DE CONFIRMATION
  let cartItems = document.getElementsByClassName("cart-items")[0];
  //on check tous les childs dans le cart
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal(); //REMETTRE PRIX A 0
}
///function remove
function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}
///update cart total quand on ajoute des arrticles
function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1; // si quantite incorect, remet a 1
  }
  updateCartTotal();
}
function addToCartClicked(event) {
  let button = event.target;
  let shopItem = button.parentElement.parentElement;
  let title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
  let price = shopItem.getElementsByClassName("shop-item-price");
  let imageSrc = shopItem.getElementsByClassName("shop-item-image"[0]).src;
  //creer un row pour afficher element cart
  addItemToCart(title, price, imageSrc);
  // update price quand on rajoute items
  updateCartTotal();
}
//function creer le row pour element du cart
function addItemToCart(title, price, imageSrc) {
  let cartRow = document.createElement("div"); // ajouter div au cart item
  cartRow.classList.add("cart-row");
  let cartItems = document.getElementsByClassName("cart-items")[0];
  let cartItemNames = cartItems.getElementsByClassName("cart-item-title"); // on check de ne pas avoir deja l item dans le panier pour ne pas rajouter des lignes
  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("This item is already added to the cart");
      return;
    }
  }
  let cartRowsContents =
    "ENTER CE QU ON A FAIT EN HTML avec ${imageSrc} ${title} ${price} comme variable ";
  cartRow.innerHTML = cartRowsContents;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("btn-danger")[0]
    .addEventListener("click", removeCartItem); // pour faire fonctionner bouton remove quand on rajoutte des items
  cartRow
    .getElementsByClassName("cart-quantity-inputs")[0]
    .addEventListener("change", quantityChanged); // pour actualiser le prix  quand on rajoutte des items
}
///update cart total quand on remove des arrticles
function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName("cart-items")[0];
  let carRows = cartItemContainer.getElementsByClassName("cart-row");
  let total = 0;
  for (var i = 0; i, carRows.length; i++) {
    let cartRow = carRows[i];
    let priceElement = cartRow.getElementsByClassName("cart-price")[0];
    let quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    let price = parseFloat(priceElement.innerText.replace("$", "")); // retire le signe dollar parse va donner transformer string en number
    let quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100; //////arrondir a deux decimales seulement
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "$" + total;
}


++ HTML




<!-- <section class="container content-section">
<h2 class="section-header">CART</h2>
<div class="cart-row">
  <span class="cart-item cart-header cart-column">ITEM</span>
  <span class="cart-price cart-header cart-column">PRICE</span>
  <span class="cart-quantity cart-header cart-column">QUANTITY</span>
</div>
<div class="cart-items"></div>
<div class="cart-total">
  <strong class="cart-total-title">Total</strong>
  <span class="cart-total-price">$0</span>
</div>
<button class="btn btn-primary btn-purchase" type="button">
  PURCHASE
</button>
</section> -->
///////////////////////////////////////////////////////////////////////////





//////////////////////////////////////////////////////////////////////
// //validation EMAIL
// function ValidateEmail(mail) {
//   if (
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
//       myForm.emailAddr.value
//     )
//   ) {
//     return true;
//   }
//   alert("You have entered an invalid email address!");
//   return false;
// }
//////////////////////////////////////////////////////////////////////