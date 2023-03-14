const shoppingCart = ["shirt", "t-shirt", "pants", "shoes", "shirt", "t-shirt"];
// output: ["shirt", "t-shirt", "pants", "shoes"]

const nonDuplicates = shoppingCart.reduce(function (prev, curr) {
  if (!prev.includes(curr)) {
    return [...prev, curr];
  }
  return prev;
}, []);

console.log(nonDuplicates);
