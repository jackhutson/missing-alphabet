const getMissingAlphabetChars = require('./alphabet');

const noZ = 'abcdefghijklmnopqrstuvwxy';
test(noZ, () => {
  expect(getMissingAlphabetChars(noZ)).toBe('z');
});

const fullAlphabet = 'abcdefghijklmnopqrstuvwxyz';
test(fullAlphabet, () => {
  expect(getMissingAlphabetChars(fullAlphabet)).toBe('');
});

const doubleAlphabetSansZ =
  'aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyy';
test(doubleAlphabetSansZ, () => {
  expect(getMissingAlphabetChars(doubleAlphabetSansZ)).toBe('zz');
});

const oneAyAndNozz = 'abbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxy';
test(oneAyAndNozz, () => {
  expect(getMissingAlphabetChars(oneAyAndNozz)).toBe('ayzz');
});

const edabyte = 'edabit';
test(edabyte, () => {
  expect(getMissingAlphabetChars(edabyte)).toBe('cfghjklmnopqrsuvwxyz');
});

const quadabet =
  'aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz';
test(quadabet, () => {
  expect(getMissingAlphabetChars(quadabet)).toBe('');
});

const mubashir = 'mubashir';
test(mubashir, () => {
  expect(getMissingAlphabetChars(mubashir)).toBe('cdefgjklnopqtvwxyz');
});

const aaaa = 'aaaa';
test(aaaa, () => {
  expect(getMissingAlphabetChars(aaaa)).toBe(
    'bbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz'
  );
});
