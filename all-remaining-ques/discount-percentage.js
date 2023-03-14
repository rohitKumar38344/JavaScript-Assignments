const calculateDiscount = (originalPrice, discountPrice) =>
  ((originalPrice - discountPrice) / originalPrice) * 100;

console.log(calculateDiscount(450, 405).toFixed(2));
