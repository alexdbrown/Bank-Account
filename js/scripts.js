function User(userName, deposit) {
  this.userName = userName;
  this.deposit = deposit;
}

User.prototype.account = function() {
  return this.userName + ", " + this.deposit;
}

User.prototype.balance = function() {
  return this.deposit;
}
