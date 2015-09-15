
describe('User', function() {
  it("creates a new user with the given specifications", function() {
     var testUser = new User("Jenny Lopez", 500);
    expect(testUser.userName).to.equal("Jenny Lopez");
    expect(testUser.deposit).to.equal(500);
  });

  it("adds the account information for each individual user", function() {
    var testUser = new User("Jenny Lopez", 500);
    expect(testUser.account()).to.equal("Jenny Lopez, 500");
  });

    it("shows a user thir account balance", function() {
      var testUser = new User("Jenny Lopez", 500);
      expect(testUser.balance()).to.equal(500);
    });
});
