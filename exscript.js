
  let cart = [];

  const buttons = document.querySelectorAll(".add-to-cart");
  const cartCount = document.getElementById("cart-count");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const product = {
        id: button.dataset.id,
        name: button.dataset.name,
        price: button.dataset.price,
        quantity: 1
      };

      // check if item already in cart
      const existing = cart.find(item => item.id === product.id);

      if (existing) {
        existing.quantity++;
      } else {
        cart.push(product);
      }

      updateCartCount();
      console.log(cart);
    });
  });

  function updateCartCount() {
    let total = 0;
    cart.forEach(item => total += item.quantity);
    cartCount.innerText = total;
  }

