const candies = require('./index');
const should = require('chai').should();

describe('candies', () => {
  it('should return 9 when passed 3 & 10', function(done) {
    candies(3, 10)
      .should.be.a('number')
      .that.equals(9);
    done();
  });

  it('should return 2 when passed 1 & 2', function(done) {
    candies(1, 2)
      .should.be.a('number')
      .that.equals(2);
    done();
  });

  it('should return 0 when passed 10 & 5', function(done) {
    candies(10, 5)
      .should.be.a('number')
      .that.equals(0);
    done();
  });

  it('should return 4 when passed 4 & 4', function(done) {
    candies(4, 4)
      .should.be.a('number')
      .that.equals(4);
    done();
  });
});
