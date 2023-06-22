
// Array to store cart items
let cart = [];

// Array of products
let products = [
  { name: "Product 1", price: 10, img: "product1.jpg" },
  { name: "Product 2", price: 20, img: "product2.jpg" },
  { name: "Product 3", price: 15, img: "product3.jpg" }
];

// Function to render about us content
const renderAboutUs = () => {
  const contentContainer = document.getElementById("contentContainer");
  contentContainer.innerHTML = "<h2>About Us</h2><p>Some information about the website.</p>";
};

// Function to render all products
const renderAllProducts = () => {
  const contentContainer = document.getElementById("contentContainer");
  contentContainer.innerHTML = "";

  products.forEach((product, index) => {
    const productElement = document.createElement("div");
    productElement.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button class="addToCartButton" data-index="${index}">Add to Cart</button>
    `;
    contentContainer.appendChild(productElement);
  });

  // Add event listeners to the "Add to Cart" buttons
  const addToCartButtons = document.getElementsByClassName("addToCartButton");
  Array.from(addToCartButtons).forEach((button) => {
    button.addEventListener("click", addToCart);
  });
};

// Function to render cart items
const renderCartItems = () => {
  const contentContainer = document.getElementById("contentContainer");
  contentContainer.innerHTML = "";

  cart.forEach((item, index) => {
    const itemElement = document.createElement("div");
    itemElement.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>Price: $${item.price}</p>
      <button class="deleteFromCartButton" data-index="${index}">Delete from Cart</button>
    `;
    contentContainer.appendChild(itemElement);
  });

  // Add event listeners to the "Delete from Cart" buttons
  const deleteFromCartButtons = document.getElementsByClassName("deleteFromCartButton");
  Array.from(deleteFromCartButtons).forEach((button) => {
    button.addEventListener("click", deleteFromCart);
  });
};

// Function to add an item to the cart
const addToCart = (event) => {
  const index = event.target.dataset.index;
  const product = products[index];
  cart.push(product);

  updateCartCounter();
};

// Function to delete an item from the cart
const deleteFromCart = (event) => {
  const index = event.target.dataset.index;
  cart.splice(index, 1);

  updateCartCounter();
  renderCartItems();
};

// Function to update the cart counter
const updateCartCounter = () => {
  const cartCounter = document.getElementById("cartCounter");
  cartCounter.textContent = cart.length;
};

// Event listeners for button clicks
document.getElementById("aboutButton").addEventListener("click", renderAboutUs);
document.getElementById("productsButton").addEventListener("click", renderAllProducts);
document.getElementById("cartButton").addEventListener("click", renderCartItems);

// Initialize cart counter
updateCartCounter();
