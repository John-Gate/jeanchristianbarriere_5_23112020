//// Fonction Pour La Creation Des Articles De L'Index
const insertProduct = (produit) => {
  let mainArticle = document.querySelector("#main");
  let sectionCont = document.createElement("section");
  sectionCont.className = "card shadow col-4 mx-1 my-1";
  mainArticle.appendChild(sectionCont);

  let titleMain = document.createElement("h2");
  let titleData = document.createTextNode(produit.name);
  titleMain.className='text-center';
  titleMain.appendChild(titleData);
  sectionCont.appendChild(titleMain);

  let image = document.createElement("img");
  image.className = "card-img-top w-100";
  image.src = produit.imageUrl;
  sectionCont.appendChild(image);

  let div = document.createElement("div");
  div.className = "card-body";

  let descrip = document.createElement("p");
  descrip.className = "card-text";
  let descData = document.createTextNode(produit.description);
  descrip.appendChild(descData)
  div.appendChild(descrip);

  let price = document.createElement("p");
  price.className = "card-text";
  let priceData = document.createTextNode(produit.price / 100 + "$" );
  price.appendChild(priceData)
  div.appendChild(price);

  let idProduct = document.createElement("a");
  idProduct.className="text-decoration-none stretched-link";
  idProduct.href='product.html?id=' + produit._id;
  idProduct.innerHTML="Voir la fiche produit";
  div.appendChild(idProduct);
  

  sectionCont.appendChild(div);
};

