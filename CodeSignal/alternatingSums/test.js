const alternatingSums = require('./index');
const should = require('chai').should();

describe('alternatingSums', () => {
  it('should return [180, 105] when passed [50, 60, 60, 45, 70]', function(done) {
    alternatingSums([50, 60, 60, 45, 70]).should.deep.equal([180, 105]);
    done();
  });

  it('should return [100, 50] when passed [100, 50]', function(done) {
    alternatingSums([100, 50]).should.deep.equal([100, 50]);
    done();
  });

  it('should return [80, 0] when passed [80]', function(done) {
    alternatingSums([80]).should.deep.equal([80, 0]);
    done();
  });

  it('should return [150, 150] when passed [100, 50, 50, 100]', function(done) {
    alternatingSums([100, 50, 50, 100]).should.deep.equal([150, 150]);
    done();
  });

  it('should return [150, 151] when passed [100, 51, 50, 100]', function(done) {
    alternatingSums([100, 51, 50, 100]).should.deep.equal([150, 151]);
    done();
  });
});
