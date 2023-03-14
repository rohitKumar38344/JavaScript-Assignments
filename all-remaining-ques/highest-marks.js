const marks = [45, 12, 67, 81, 23];
let highestMarks = marks[0];

for (let i = 1; i < marks.length; i++) {
  highestMarks = highestMarks < marks[i] ? marks[i] : highestMarks;
}

console.log(highestMarks);
