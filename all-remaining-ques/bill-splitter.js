const description = {
  dishesPrice: [45, 80, 120, 329],
  personSharing: 5,
};

const calculateBill = function () {
  const dish = description.dishesPrice;
  let totalBill = 0;
  let perPersonPrice = 0;
  for (let i = 0; i < dish.length; i++) {
    totalBill += dish[i];
  }
  perPersonPrice = totalBill / description.personSharing;

  return {
    totalAmount: totalBill,
    perPersonCost: perPersonPrice,
  };
};

console.log(calculateBill());
