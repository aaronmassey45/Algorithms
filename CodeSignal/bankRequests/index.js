function bankRequests(accounts, requests) {
  accounts.unshift(0);

  for (let i = 0; i < requests.length; i++) {
    const request = requests[i];
    const arr = request.split(' ');

    switch (arr[0]) {
      case 'withdraw':
        const withdrawAmount = parseInt(arr[2]);
        if (!accounts[arr[1]] || withdrawAmount > accounts[arr[1]]) {
          return [-(i + 1)];
        }
        accounts[arr[1]] -= withdrawAmount;
        break;
      case 'transfer':
        const transferAmount = parseInt(arr[3]);
        if (
          !accounts[arr[1]] ||
          !accounts[arr[2]] ||
          transferAmount > accounts[arr[1]]
        ) {
          return [-(i + 1)];
        }
        accounts[arr[1]] -= transferAmount;
        accounts[arr[2]] += transferAmount;
        break;
      case 'deposit':
        if (!accounts[arr[1]]) return [-(i + 1)];
        accounts[arr[1]] += parseInt(arr[2]);
        break;
      default:
        break;
    }
  }

  accounts.shift();
  return accounts;
}

module.exports = bankRequests;
