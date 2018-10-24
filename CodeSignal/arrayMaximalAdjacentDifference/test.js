const arrayMaximalAdjacentDifference = require('./index');
const should = require('chai').should();

describe('arrayMaximalAdjacentDifference', () => {
  it('should return 3 when passed [2, 4, 1, 0]', function(done) {
    arrayMaximalAdjacentDifference([2, 4, 1, 0])
      .should.be.a('number')
      .that.equals(3);
    done();
  });

  it('should return 0 when passed [1, 1, 1, 1]', function(done) {
    arrayMaximalAdjacentDifference([1, 1, 1, 1])
      .should.be.a('number')
      .that.equals(0);
    done();
  });

  it('should return 7 when passed [-1, 4, 10, 3, -2]', function(done) {
    arrayMaximalAdjacentDifference([-1, 4, 10, 3, -2])
      .should.be.a('number')
      .that.equals(7);
    done();
  });

  it('should return 2 when passed [10, 11, 13]', function(done) {
    arrayMaximalAdjacentDifference([10, 11, 13])
      .should.be.a('number')
      .that.equals(2);
    done();
  });

  it('should return 0 when passed [-2, -2, -2, -2, -2]', function(done) {
    arrayMaximalAdjacentDifference([-2, -2, -2, -2, -2])
      .should.be.a('number')
      .that.equals(0);
    done();
  });

  it('should return 4 when passed [-1, 1, -3, -4]', function(done) {
    arrayMaximalAdjacentDifference([-1, 1, -3, -4])
      .should.be.a('number')
      .that.equals(4);
    done();
  });
});
