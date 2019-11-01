const delivery = (order, shoppers) => {
  const [distanceFromShopper, waitTime, extraTime] = order;
  const timeTilLate = waitTime + extraTime;

  return shoppers.reduce((acc, shopper) => {
    const [distance, speed, timeInStore] = shopper;

    if (timeInStore >= timeTilLate) {
      acc.push(false);
    } else {
      const timeTilDelivery =
        (distanceFromShopper + distance) / speed + timeInStore;
      const hasIdleTime = timeTilDelivery < waitTime;
      const exceedsTime = timeTilDelivery > timeTilLate;
      const shouldGo = !hasIdleTime || exceedsTime;
      acc.push(!hasIdleTime && !exceedsTime);
    }
    return acc;
  }, []);
};

module.exports = delivery;
