function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  if (yourLeft + yourRight !== friendsLeft + friendsRight) return false;

  const myStrong = yourLeft > yourRight ? yourLeft : yourRight;
  const friendsStrong = friendsLeft > friendsRight ? friendsLeft : friendsRight;

  return myStrong === friendsStrong ? true : false;
}

console.log(areEquallyStrong(10, 15, 5, 20));
console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(5, 5, 10, 10));
