const vowelsString = "aeiou";

const countVowels = function (userInput) {
  let vowelCount = 0;
  const name = userInput.trim().toLowerCase();
  for (let char of name) {
    if (vowelsString.includes(char)) {
      vowelCount++;
    }
  }
  return vowelCount;
};

console.log(countVowels("Steve jobs"));
console.log(countVowels("mayank"));
