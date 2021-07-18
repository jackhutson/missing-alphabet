const getMissingAlphabetChars = (value) => {
  const alphabet = Array.from(Array(26))
    .map((e, i) => i + 97)
    .map((x) => String.fromCharCode(x));

  const dict = [...value.matchAll(/[a-zA-Z]/g)]
    .reduce(
      (acc, letter) => acc.set(letter[0], (acc.get(letter[0]) || 0) + 1),
      new Map()
    );

  let alphabets = [];

  for (let i = 0; i < Math.max(...dict.values()); i++) {
    alphabets = alphabets.concat(alphabet);
  }

  alphabets.sort();

  [...dict.entries()].forEach((item) => {
    const firstIndex = alphabets.indexOf(item[0]);
    alphabets.splice(firstIndex, item[1]);
  });

  return alphabets.join('');
};

module.exports = getMissingAlphabetChars;
