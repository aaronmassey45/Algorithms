const arrayChange = require('./index');
const should = require('chai').should();

describe('arrayChange', () => {
  it('should return 3 when passed [1, 1, 1]', function(done) {
    arrayChange([1, 1, 1])
      .should.be.a('number')
      .that.equals(3);
    done();
  });

  it('should return 5 when passed [-1000, 0, -2, 0]', function(done) {
    arrayChange([-1000, 0, -2, 0])
      .should.be.a('number')
      .that.equals(5);
    done();
  });

  it('should return 12 when passed [2, 1, 10, 1]', function(done) {
    arrayChange([2, 1, 10, 1])
      .should.be.a('number')
      .that.equals(12);
    done();
  });

  it('should return 13 when passed [2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15]', function(done) {
    arrayChange([2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15])
      .should.be.a('number')
      .that.equals(13);
    done();
  });
});
