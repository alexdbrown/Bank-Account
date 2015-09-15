
describe('User', function() {
  it("creates a new user with the given specifications", function() {
     var testUser = new User("Jenny Lopez", 500);
    expect(testUser.userName).to.equal("Jenny Lopez");
    expect(testUser.balance).to.equal(500);
  });

  it("adds the account information for each individual user", function() {
    var testUser = new User("Jenny Lopez", 500);
    expect(testUser.account()).to.equal("Jenny Lopez, 500");
  });

  it("shows a user their account balance", function() {
    var testUser = new User("Jenny Lopez", 500);
    expect(testUser.currentBalance()).to.equal(500);
  });

  it("allows a user make a deposit into their account", function() {
    var testUser = new User("Jenny Lopez", 500);
    expect(testUser.makeDeposit(100)).to.equal(600);
  });
});
