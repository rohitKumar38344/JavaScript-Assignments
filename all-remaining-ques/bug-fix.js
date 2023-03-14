const quantity = [4, 2, 7, 8, 9];

const updateQuantity = function () {
  for (let i = 0; i < quantity.length; i++) {
    quantity[i] = quantity[i] * 2;
  }
};

updateQuantity();

console.log(quantity);
