const calculateRentalCost = function (carType, days) {
  let rent = 0;
  switch (carType.toLowerCase()) {
    case "economy":
      rent = 4000 * days;
      break;
    case "midsize":
      rent = 10000 * days;
      break;
    case "luxury":
      rent = 20000 * days;
      break;
    default:
      console.log("Please enter a valid car type :(");
  }
  return rent;
};

console.log(calculateRentalCost("midsize", 4));
