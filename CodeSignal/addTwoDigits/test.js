const addTwoDigits = require('./index');
const should = require('chai').should();

describe('addTwoDigits', () => {
  it('should return 11 when passed 29', function(done) {
    addTwoDigits(29).should.equal(11);
    done();
  });

  it('should return 12 when passed 48', function(done) {
    addTwoDigits(48).should.equal(12);
    done();
  });

  it('should return 1 when passed 10', function(done) {
    addTwoDigits(10).should.equal(1);
    done();
  });

  it('should return 7 when passed 25', function(done) {
    addTwoDigits(25).should.equal(7);
    done();
  });
});
