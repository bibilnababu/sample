
  module.exports = sortRoman;
  function sortRoman(names) {
    names.sort((a, b) => {
      const [givenName1, romanNumeral1] = a.split(' ');
      const [givenName2, romanNumeral2] = b.split(' ');
//Sorting by givenName, if unique else using roman numerals
      if (givenName1 !== givenName2) {
        return givenName1.localeCompare(givenName2);
      }
      return romanNumeralTodecimal(romanNumeral1) - romanNumeralTodecimal(romanNumeral2);
    });
  
    return names;
}

// Function to convert roman numeral to decimal
function romanNumeralTodecimal(romanNumeral) {
//Defining all the unique roman numerals for converting to decimal upto 50
   const romantodecimal = {
      I: 1,
      IV: 4,
      V: 5,
      IX: 9,
      X: 10,
      XL: 40,
      L: 50
      
    };
  
    let decimal = 0;
    for (let i = 0; i < romanNumeral.length; i++) {
//To include the roman numerals formed by substraction
      if (romantodecimal[romanNumeral[i + 1]] > romantodecimal[romanNumeral[i]]) {
        decimal += romantodecimal[romanNumeral[i + 1]] - romantodecimal[romanNumeral[i]];
        i++;
      } else {
        decimal += romantodecimal[romanNumeral[i]];
      }
    }
    return decimal;
  }
