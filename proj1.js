// Sample products
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    image: "baggyJeans.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    image: "sandal.webp",
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    image: "statue.jpg",
  },
];

let cart = [];

const productContainer = document.getElementById("product-list");

// Display products
products.forEach((product) => {
  const productCard = document.createElement("div");
  productCard.classList.add("col-md-4");

  productCard.innerHTML = `
        <div class="card product-card">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h5 class="product-title">${product.name}</h5>
                <p class="product-price">$${product.price}</p>
                <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `;

  productContainer.appendChild(productCard);
});

// Add product to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  cart.push(product);
  updateCartCount();
}

// Update cart count
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = cart.length;
}

// Handle form submission
document
  .getElementById("checkout-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;

    if (cart.length === 0) {
      alert("Your cart is empty.");
    } else {
      alert(
        `Thank you for your purchase, ${name}! Your order will be shipped to ${address}.`
      );
      cart = [];
      updateCartCount();
    }
  });
