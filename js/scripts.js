
debugger;
function User(userName, firstDeposit) {
  this.userName = userName;
  this.balance = firstDeposit;
}

User.prototype.account = function() {
  return this.userName + ", " + this.balance;
}

User.prototype.currentBalance = function() {
  return this.balance;
}

User.prototype.makeDeposit = function(newDeposit) {
  this.balance += newDeposit;
  return this.balance;
}
