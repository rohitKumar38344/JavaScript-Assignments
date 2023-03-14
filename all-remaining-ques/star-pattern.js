const printTriangle = function (iteration) {
  let output = "";
  for (let i = 0; i < iteration; i++) {
    for (let j = 0; j < iteration - i; j++) {
      output += "*";
    }
    console.log(output);
    output = "";
  }
};

printTriangle(20);
