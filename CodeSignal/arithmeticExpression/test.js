const arthmeticExpression = require('./index');
const should = require('chai').should();

describe('arthmeticExpression', () => {
  it('should return true when passed "2, 3, 5"', function(done) {
    arthmeticExpression(2, 3, 5).should.be.true;
    done();
  });

  it('should return true when passed "8, 2, 4"', function(done) {
    arthmeticExpression(8, 2, 4).should.be.true;
    done();
  });

  it('should return false when passed "8, 3, 2"', function(done) {
    arthmeticExpression(8, 3, 2).should.be.false;
    done();
  });

  it('should return true when passed "6, 3, 3"', function(done) {
    arthmeticExpression(6, 3, 3).should.be.true;
    done();
  });

  it('should return true when passed "18, 2, 9"', function(done) {
    arthmeticExpression(18, 2, 9).should.be.true;
    done();
  });

  it('should return true when passed "2, 3, 6"', function(done) {
    arthmeticExpression(2, 3, 6).should.be.true;
    done();
  });

  it('should return false when passed "5, 2 ,0"', function(done) {
    arthmeticExpression(5, 2, 0).should.be.false;
    done();
  });

  it('should return false when passed "10, 2, 2"', function(done) {
    arthmeticExpression(10, 2, 2).should.be.false;
    done();
  });

  it('should return false when passed "5, 2, 2"', function(done) {
    arthmeticExpression(5, 2, 2).should.be.false;
    done();
  });

  it('should return false when passed "1, 2, 1"', function(done) {
    arthmeticExpression(1, 2, 1).should.be.false;
    done();
  });
});
