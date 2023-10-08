let navScroll = window.pageYOffset;
let screenWidth = window.innerWidth;

window.onscroll = function() {
    let currentNavScroll = window.pageYOffset;
    screenWidth = window.innerWidth;
    if (navScroll > currentNavScroll) {
        document.querySelector('.header').style.top = '0';
    } else {
        document.querySelector('.header').style.top = '-260px';
    }
    navScroll = currentNavScroll;
}

const navLink = document.getElementById("toggleButton");

navLink.addEventListener("click", () => {
    let responsiv = document.getElementById("navbarRight");
    if (responsiv.className === "navbar-right") {
        responsiv.className += " responsive";
    } else {
        responsiv.className = "navbar-right";
    }
});


// Fungsi untuk mengambil data menggunakan metode GET
document.addEventListener('DOMContentLoaded', () => {
  const productId = 1; // Ganti dengan ID produk yang diinginkan
  const productDetailsContainer = document.getElementById('product-details');

  fetch(`https://be-semarang-3.cyclic.app/api/catalog/${productId}`)
      .then(response => {
          if (response.ok) {
              return response.json();
          }
          throw new Error('Network response was not ok.');
      })
      .then(productData => {
          // Menampilkan data produk di halaman HTML
          const { name, price, rebate, photo } = productData;
          const productHTML = `
              <div class="product-card">
                  <div class="product-tumb">
                      <img src="${photo}" alt="${name}">
                  </div>
                  <div class="product-details">
                      <span class="product-catagory">Product Category</span>
                      <h4><a href="#">${name}</a></h4>
                      <p>${description}</p>
                      <div class="product-bottom-details">
                          <div class="product-price">Price: Rp ${price}</div>
                          <div class="product-rebate">Rebate: ${rebate}%</div>
                      </div>
                  </div>
              </div>
          `;
          productDetailsContainer.innerHTML = productHTML;
      })
      .catch(error => {
          console.error('Error fetching product data:', error);
      });
});

