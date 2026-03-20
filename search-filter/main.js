const url = "https://fakestoreapi.com/products";
let products = [];

const searchInput = document.getElementById("searchInput");
const productContainer = document.getElementById("productContainer");

const fetchProduct = async () => {
  const res = await fetch(url);
  const data = await res.json();
  products = data;
  displayProduct(products);
};

const displayProduct = (data) => {
  productContainer.innerHTML = "";

  data.forEach((product) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h2> ${product.title} </p>
      <p>$${product.price}</p>
    `;

    productContainer.appendChild(div);
  });
};

searchInput.addEventListener("input", (e) => {
  const inputValue = e.target.value.toLowerCase();

  const filtered = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });

  displayProduct(filtered);
});

fetchProduct();
