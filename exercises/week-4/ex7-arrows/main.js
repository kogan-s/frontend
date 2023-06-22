// Products data
const products = [
  { name: "Product 1", price: 10, img: "image-url-1" },
  { name: "Product 2", price: 15, img: "image-url-2" },
  { name: "Product 3", price: 20, img: "image-url-3" },
];

// Cart data
let cart = [];

// Function to render about us content
const renderAboutUs = () => {
  const contentContainer = document.getElementById("contentContainer");
  contentContainer.innerHTML = "<h2>About Us</h2><p>Some information about the website.</p>";
};

// Function to render all products
const renderProducts = () => {
  const contentContainer = document.getElementById("contentContainer");
  contentContainer.innerHTML = "<h2>All Products</h2>";
  const productList = document.createElement("ul");

  products.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button class="addToCartButton" data-name="${product.name}">Add to Cart</button>
    `;
    productList.appendChild(listItem);
  });

  contentContainer.appendChild(productList);

  // Add event listeners to "Add to Cart" buttons
  const addToCartButtons = document.getElementsByClassName("addToCartButton");
  Array.from(addToCartButtons).forEach((button) => {
    button.addEventListener("click", addToCart);
  });
};

// Function to render cart items
const renderCart = () => {
  const contentContainer = document.getElementById("contentContainer");
  contentContainer.innerHTML = "<h2>Cart Page</h2>";
  const cartList = document.createElement("ul");

  cart.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button class="deleteFromCartButton" data-name="${product.name}">Delete from Cart</button>
    `;
    cartList.appendChild(listItem);
  });

  contentContainer.appendChild(cartList);

  // Add event listeners to "Delete from Cart" buttons
  const deleteFromCartButtons = document.getElementsByClassName("delete
