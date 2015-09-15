function User(userName, firstDeposit) {
  this.userName = userName;
  this.balance = firstDeposit;
}

User.prototype.account = function() {
  return this.userName + ", $" + this.balance;
}

User.prototype.currentBalance = function() {
  return this.balance;
}

User.prototype.makeDeposit = function(newDeposit) {
  this.balance += newDeposit;
  return this.balance;
}

User.prototype.makeWithdrawl = function(newWithdrawl) {
  this.balance -= newWithdrawl;
  return this.balance;
}

$(document).ready(function() {
  $('form#user-account').submit(function(event) {
    event.preventDefault();

    var inputUserName = $("input#user-name").val();
    var inputFirstDeposit = parseInt($("input#first-deposit").val());

    var newUser = new User(inputUserName, inputFirstDeposit);
  $("h2#user-balance").append("<h2><span class='user-name'>" + newUser.account() + "</span></h2>");

  $(".user-name").last().click(function(){
    $("#show-account").hide().fadeIn().css("color", "red");
  });


});
});
