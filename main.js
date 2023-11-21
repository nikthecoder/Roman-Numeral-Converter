function convertToRoman(num) {
  // Define an array of Roman numeral objects
  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" }
  ];

  let result = "";

  // Iterate through the Roman numerals and convert the number
  for (const numeralObj of romanNumerals) {
    while (num >= numeralObj.value) {
      result += numeralObj.numeral;
      num -= numeralObj.value;
    }
  }

  return result;
}

console.log(convertToRoman(36)); // Output: XXXVI