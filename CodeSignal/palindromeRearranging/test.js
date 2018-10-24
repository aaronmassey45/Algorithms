const palindromeRearranging = require('./index');
const should = require('chai').should();

describe('palindromeRearranging', () => {
  it('should be a function', function(done) {
    (typeof palindromeRearranging).should.equal('function');
    done();
  });

  it('should return true when passed aabb', function(done) {
    palindromeRearranging('aabb').should.be.a('boolean').that.is.true;
    done();
  });

  it('should return false when passed aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc', function(done) {
    palindromeRearranging('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc').should.be.a(
      'boolean'
    ).that.is.false;
    done();
  });

  it('should return true when passed abbcabb', function(done) {
    palindromeRearranging('abbcabb').should.be.a('boolean').that.is.true;
    done();
  });

  it('should return true when passed zyyzzzzz', function(done) {
    palindromeRearranging('zyyzzzzz').should.be.a('boolean').that.is.true;
    done();
  });

  it('should return true when passed z', function(done) {
    palindromeRearranging('z').should.be.a('boolean').that.is.true;
    done();
  });

  it('should return true when passed zaa', function(done) {
    palindromeRearranging('zaa').should.be.a('boolean').that.is.true;
    done();
  });

  it('should return false when passed abca', function(done) {
    palindromeRearranging('abca').should.be.a('boolean').that.is.false;
    done();
  });
});
