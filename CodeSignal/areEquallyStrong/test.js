const areEquallyStrong = require('./index');
const should = require('chai').should();

describe('areEquallyStrong', () => {
  it('should return true when passed "10, 15, 15, 10"', function(done) {
    areEquallyStrong(10, 15, 15, 10).should.be.true;
    done();
  });

  it('should return true when passed "15, 10, 15, 10"', function(done) {
    areEquallyStrong(15, 10, 15, 10).should.be.true;
    done();
  });

  it('should return false when passed "10, 15, 15, 9"', function(done) {
    areEquallyStrong(15, 10, 15, 9).should.be.false;
    done();
  });

  it('should return true when passed "10, 5, 5, 10"', function(done) {
    areEquallyStrong(10, 5, 5, 10).should.be.true;
    done();
  });

  it('should return false when passed "10, 15, 5, 20"', function(done) {
    areEquallyStrong(10, 15, 5, 20).should.be.false;
    done();
  });

  it('should return true when passed "10, 20, 10, 20"', function(done) {
    areEquallyStrong(10, 20, 10, 20).should.be.true;
    done();
  });

  it('should return true when passed "5, 20, 20, 5"', function(done) {
    areEquallyStrong(5, 20, 20, 5).should.be.true;
    done();
  });

  it('should return false when passed "20, 15, 5, 20"', function(done) {
    areEquallyStrong(20, 15, 5, 20).should.be.false;
    done();
  });

  it('should return false when passed "5, 5, 10, 10"', function(done) {
    areEquallyStrong(5, 5, 10, 10).should.be.false;
    done();
  });
});
