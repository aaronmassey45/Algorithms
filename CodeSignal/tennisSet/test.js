const tennisSet = require('./index');
const should = require('chai').should();

describe('tennisSet', () => {
  it('should return true when passed 3 & 6', function(done) {
    tennisSet(3, 6).should.be.a('boolean').that.is.true;
    done();
  });

  it('should return false when passed 8 & 5', function(done) {
    tennisSet(8, 5).should.be.a('boolean').that.is.false;
    done();
  });

  it('should return false when passed 6 & 5', function(done) {
    tennisSet(6, 5).should.be.a('boolean').that.is.false;
    done();
  });

  it('should return false when passed 7 & 7', function(done) {
    tennisSet(7, 7).should.be.a('boolean').that.is.false;
    done();
  });

  it('should return true when passed 6 & 4', function(done) {
    tennisSet(6, 4).should.be.a('boolean').that.is.true;
    done();
  });

  it('should return true when passed 7 & 5', function(done) {
    tennisSet(7, 5).should.be.a('boolean').that.is.true;
    done();
  });

  it('should return false when passed 7 & 2', function(done) {
    tennisSet(7, 2).should.be.a('boolean').that.is.false;
    done();
  });

  it('should return true when passed 7 & 6', function(done) {
    tennisSet(7, 6).should.be.a('boolean').that.is.true;
    done();
  });

  it('should return false when passed 4 & 10', function(done) {
    tennisSet(4, 10).should.be.a('boolean').that.is.false;
    done();
  });

  it('should return false when passed 0 & 0', function(done) {
    tennisSet(0, 0).should.be.a('boolean').that.is.false;
    done();
  });
});
