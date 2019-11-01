const delivery = require('./index');

describe('delivery', () => {
  test('Should return [false, true] when orders is [200, 20, 15] and shoppers is [[300, 40, 5], [600, 40, 10]]', () => {
    expect(
      delivery([200, 20, 15], [[300, 40, 5], [600, 40, 10]])
    ).toStrictEqual([false, true]);
  });
});

describe('delivery', () => {
  test('Should return [false] when orders is [100, 4, 3] and shoppers is [[100, 33, 1]', () => {
    expect(delivery([100, 4, 3], [[100, 33, 1]])).toStrictEqual([false]);
  });
});

describe('delivery', () => {
  test('Should return [true] when orders is [100, 4, 4] and shoppers is [[100, 33, 1]', () => {
    expect(delivery([100, 4, 4], [[100, 33, 1]])).toStrictEqual([true]);
  });
});
