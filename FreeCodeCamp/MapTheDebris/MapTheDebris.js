const orbitalPeriod = arr => {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  return arr.map(({ name, avgAlt }) => {
    const T = Math.PI * 2 * Math.sqrt((avgAlt + earthRadius) ** 3 / GM);
    return {
      name,
      orbitalPeriod: Math.round(T),
    };
  });
};

console.log(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]));
console.log(
  orbitalPeriod([
    { name: 'iss', avgAlt: 413.6 },
    { name: 'hubble', avgAlt: 556.7 },
    { name: 'moon', avgAlt: 378632.553 },
  ])
);
