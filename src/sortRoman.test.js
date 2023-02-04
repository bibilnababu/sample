const sortRoman = require('./sortRoman');

describe('returns alphabetically', () => {
  test('sorts a list of names and Roman numerals', () => {
    const list = ['John','Jane'];
  
    expect(sortRoman(list)).toEqual(['Jane','John']);
  });
});

// Louis VIII
// Louis IX
// Expected Output

// Download
// Louis VIII
// Louis IX