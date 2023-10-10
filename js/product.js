let navScroll = window.pageYOffset;
let screenWidth = window.innerWidth;

window.onscroll = function () {
  let currentNavScroll = window.pageYOffset;
  screenWidth = window.innerWidth;
  if (navScroll > currentNavScroll) {
    document.querySelector(".header").style.top = "0";
  } else {
    document.querySelector(".header").style.top = "-260px";
  }
  navScroll = currentNavScroll;
};

const navLink = document.getElementById("toggleButton");

navLink.addEventListener("click", () => {
  let responsiv = document.getElementById("navbarRight");
  if (responsiv.className === "navbar-right") {
    responsiv.className += " responsive";
  } else {
    responsiv.className = "navbar-right";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list"); // Definisikan variabel productList di sini
  const productListshoes = document.getElementById("product-list-shoes");
  const productListslingbag = document.getElementById("product-list-slingbag");
  const productListwalkingstick = document.getElementById(
    "product-list-walking-stick"
  );
  const productListbackpack = document.getElementById("product-list-backpack");
  const productListhat = document.getElementById("product-list-hat");
  const productListjacket = document.getElementById("product-list-jacket");
  fetch("https://courageous-ox-cloak.cyclic.app/api/catalog")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data && data.success && data.data) {
        const products = data.data;
        products.forEach((product) => {
          const { name, price, desc, type, rebate, photo } = product;
          const productElement = document.createElement("div");
          productElement.className = "product-card";
          productElement.innerHTML = `
                    <div class="badge">${rebate}</div> 
                        <div class="product-tumb">
                          <img src="${photo}" alt="">
                        </div>
                        <div class="product-details">
                          <span class="product-catagory">${type}</span>
                          <h4><a href="">${name}</a></h4>
                          <p>${desc}.</p>
                          <div class="product-bottom-details">
                            <div class="product-price">Rp ${price}</div>
                            <div class="product-links">
                              <a href=""><i class="fa fa-heart"></i></a>
                              <a href=""><i class="fa fa-shopping-cart"></i></a>
                            </div>
                          </div>
                        </div>
                    `;
          if (type === "SHOES") {
            productListshoes.appendChild(productElement);
          }
          if (type === "SLINGBAG") {
            productListslingbag.appendChild(productElement);
          }
          if (type === "WALKING STICK") {
            productListwalkingstick.appendChild(productElement);
          }
          if (type === "BACKPACK") {
            productListbackpack.appendChild(productElement);
          }
          if (type === "HAT") {
            productListhat.appendChild(productElement);
          }
          if (type === "JACKET") {
            productListjacket.appendChild(productElement);
          }
        });
      } else {
        productList.innerHTML = "Failed to load products.";
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      productList.innerHTML = "Failed to fetch products.";
    });
});
