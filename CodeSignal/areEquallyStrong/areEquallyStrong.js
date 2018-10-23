function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  if (yourLeft + yourRight !== friendsLeft + friendsRight) return false;

  const yourStrong = yourLeft > yourRight ? yourLeft : yourRight;
  const friendsStrong = friendsLeft > friendsRight ? friendsLeft : friendsRight;

  return yourStrong === friendsStrong;
}

module.exports = areEquallyStrong;
