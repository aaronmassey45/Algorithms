const chessBoardCellColor = require('./index');
const should = require('chai').should();

describe('chessBoardCellColor', () => {
  it('should return 9 when passed 3 & 10', function(done) {
    chessBoardCellColor('A1', 'C3')
      .should.be.a('boolean')
      .that.equals(true);
    done();
  });

  it('should return 9 when passed 3 & 10', function(done) {
    chessBoardCellColor('A1', 'H3')
      .should.be.a('boolean')
      .that.equals(false);
    done();
  });
});
