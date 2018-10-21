const alphabeticShift = require('./index');
const should = require('chai').should();

describe('alphabeticShift', () => {
  it('should return dsbaz when passed crazy', function(done) {
    alphabeticShift('crazy').should.equal('dsbaz');
    done();
  });

  it('should return z when passed a', function(done) {
    alphabeticShift('z').should.equal('a');
    done();
  });

  it('should return bbbbcccdde when passed aaaabbbccd', function(done) {
    alphabeticShift('aaaabbbccd').should.equal('bbbbcccdde');
    done();
  });

  it('should return gvaaz when passed fuzzy', function(done) {
    alphabeticShift('fuzzy').should.equal('gvaaz');
    done();
  });

  it('should return dpeftjhobm when passed codesignal', function(done) {
    alphabeticShift('codesignal').should.equal('dpeftjhobm');
    done();
  });
});
