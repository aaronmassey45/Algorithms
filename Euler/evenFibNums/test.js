const fiboEvenSum = require('./index');
const should = require('chai').should();

describe('fiboEvenSum', () => {
  it('should return 188 when passed 10', function(done) {
    fiboEvenSum(10).should.equal(188);
    done();
  });

  it('should return 60696 when passed 23', function(done) {
    fiboEvenSum(23).should.equal(60696);
    done();
  });

  it('should return 1485607536 when passed 43', function(done) {
    fiboEvenSum(43).should.equal(1485607536);
    done();
  });
});
