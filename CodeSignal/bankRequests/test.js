const bankRequests = require('./index');
const should = require('chai').should();

describe('bankRequests', () => {
  it("should return [30, 90, 5, 65, 30] when passed [10, 100, 20, 50, 30],['withdraw 2 10', 'transfer 5 1 20', 'deposit 5 20', 'transfer 3 4 15']", function(done) {
    bankRequests(
      [10, 100, 20, 50, 30],
      ['withdraw 2 10', 'transfer 5 1 20', 'deposit 5 20', 'transfer 3 4 15']
    )
      .should.be.an('array')
      .that.has.a.lengthOf(5)
      .that.deep.equals([30, 90, 5, 65, 30]);
    done();
  });

  it('should return [-2] when passed [20, 1000, 500, 40, 90], ["deposit 3 400", "transfer 1 2 30", "withdraw 4 50"]', function(done) {
    bankRequests(
      [20, 1000, 500, 40, 90],
      ['deposit 3 400', 'transfer 1 2 30', 'withdraw 4 50']
    )
      .should.be.an('array')
      .that.has.a.lengthOf(1)
      .that.deep.equals([-2]);
    done();
  });

  it('should return [70311] when passed [93451], ["withdraw 1 23140"]', function(done) {
    bankRequests([93451], ['withdraw 1 23140'])
      .should.be.an('array')
      .that.has.a.lengthOf(1)
      .that.deep.equals([70311]);
    done();
  });

  it('should return [-1] when passed [42], ["transfer 1 2 3"]', function(done) {
    bankRequests([42], ['transfer 1 2 3'])
      .should.be.an('array')
      .that.has.a.lengthOf(1)
      .that.deep.equals([-1]);
    done();
  });

  it("should return [-3] when passed [624, 40204, 22629, 8534, 67973, 36586, 60793, 55954, 79998, 54430], ['transfer 5 2 34', 'withdraw 10 34', 'transfer 2 50 92', 'transfer 2 7 27', 'deposit 5 68', 'deposit 3 80', 'transfer 7 1 67', 'deposit 1 75', 'deposit 1 68', 'withdraw 9 95']", function(done) {
    bankRequests(
      [624, 40204, 22629, 8534, 67973, 36586, 60793, 55954, 79998, 54430],
      [
        'transfer 5 2 34',
        'withdraw 10 34',
        'transfer 2 50 92',
        'transfer 2 7 27',
        'deposit 5 68',
        'deposit 3 80',
        'transfer 7 1 67',
        'deposit 1 75',
        'deposit 1 68',
        'withdraw 9 95',
      ]
    )
      .should.be.an('array')
      .that.has.a.lengthOf(1)
      .that.deep.equals([-3]);
    done();
  });
});
