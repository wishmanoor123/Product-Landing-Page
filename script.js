let cart = [];
let cartCount = 0;
let totalPrice = 0;

const cartIcon = document.querySelector('.cart-icon');
const cartDropdown = document.querySelector('.cart-dropdown');
const cartCountEl = document.querySelector('.cart-count');
const cartItemsEl = document.querySelector('.cart-items');
const cartTotalEl = document.querySelector('.cart-total');
const closeCartBtn = document.querySelector('.close-cart');

// Toggle dropdown
cartIcon.addEventListener('click', () => {
  cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
});

closeCartBtn.addEventListener('click', () => {
  cartDropdown.style.display = 'none';
});

// Add to cart buttons
const addButtons = document.querySelectorAll('.add-cart-btn');
addButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.product-card');
    const name = card.querySelector('h3').textContent;
    const priceText = card.querySelector('.price-tag').textContent;
    const price = parseInt(priceText.replace(/\D/g, ''));

    cart.push({ name, price });
    cartCount++;
    totalPrice += price;

    updateCartUI();
    alert("✅ Product successfully added to cart!");
  });
});

function updateCartUI() {
  cartCountEl.textContent = cartCount;
  cartItemsEl.innerHTML = '';

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.name} - Rs. ${item.price}
      <button onclick="removeFromCart(${index})"><i class="fas fa-trash"></i></button>
    `;
    cartItemsEl.appendChild(li);
  });

  cartTotalEl.textContent = `Total: Rs. ${totalPrice}`;
}

window.removeFromCart = function(index) {
  totalPrice -= cart[index].price;
  cart.splice(index, 1);
  cartCount--;
  updateCartUI();
};

// Contact form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent successfully!");
});
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  scrollToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});



