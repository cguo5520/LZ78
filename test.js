const expect = require('chai').expect;
const LZ78 = require('./index');

const str = 'abaaabababababbacacaca';
const encoded = LZ78.encode(str);
const decoded = LZ78.decode(encoded);

describe('Encode', function() {
  it('encodes', function() {
    expect(typeof encoded).equals('object');
    expect(encoded).to.deep.equal([ 280,
      97,
      280,
      98,
      280,
      97,
      48,
      280,
      98,
      48,
      280,
      97,
      51,
      280,
      97,
      49,
      280,
      98,
      53,
      280,
      99,
      53,
      280,
      99,
      48,
      280,
      97,
      56,
      281 ]);
  });
});

describe('Decode', function() {
  it('decodes', function () {
    expect(decoded).to.equal(str);
  });
});
