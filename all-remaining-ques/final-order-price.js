const cart = [
  {
    units: 5,
    price: 41,
  },
  {
    units: 12,
    price: 220,
  },
  {
    units: 22,
    price: 319,
  },
  {
    units: 8,
    price: 135,
  },
];

const calculateFinalOrderPrice = (order) => {
  let finalPrice = 0;
  for (let item of order) {
    finalPrice += item.units * item.price;
  }
  return finalPrice;
};

console.log(calculateFinalOrderPrice(cart));
