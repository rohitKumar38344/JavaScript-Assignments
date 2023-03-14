const checkDivisibility = function (numbersArr) {
  for (let i = 0; i < numbersArr.length; i++) {
    const element = numbersArr[i];
    if (element % 3 == 0) continue;
    if (element % 2 == 0) {
      console.log(element);
    }
  }
};

checkDivisibility([12, 4, 9, 7, 8, 41]);
