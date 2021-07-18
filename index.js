const getMissingAlphabetChars = require('./alphabet');

const value = process.argv[2];

const alphabets = getMissingAlphabetChars(value);

console.log(alphabets);