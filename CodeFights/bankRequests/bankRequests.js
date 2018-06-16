function bankRequests(accounts, requests) {
	accounts.unshift(0)
	for (let i=0; i<requests.length; i ++) {
		const request = requests[i];
		const arr = request.split(' ');
		switch (arr[0]) {
			case 'withdraw':
				const withdrawAmount = parseInt(arr[2]);
				if (!accounts[arr[1]] || withdrawAmount > accounts[arr[1]]) return [-(i+1)];
				accounts[arr[1]] -= arr[2];
				break;
			case 'transfer':
				const transferAmount = parseInt(arr[3])
				if (transferAmount > accounts[arr[1]] || !accounts[arr[2]]) return [-(i+1)];
				accounts[arr[1]] -= transferAmount;
				accounts[arr[2]] += transferAmount;
				break;
			case 'deposit':
				if (!accounts[arr[1]]) return [-(i+1)];
				accounts[arr[1]] += parseInt(arr[2]);
			default:
				break;
		}
	}
	accounts.shift();
  return accounts;
}

console.log(
  bankRequests(
		[261, 56616, 60279, 53365, 18657, 82840, 44790, 83941, 64953, 13422],
		["transfer 1 3 68",
			"transfer 6 9 81881",
			"withdraw 90 80372",
			"transfer 4 5 2423",
			"withdraw 4 73899",
			"deposit 5 73905",
			"transfer 7 3 93623"]
  )
);
