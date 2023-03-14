const customer = {
  firstName: "max",
  balance: 4520,
  deposit: function (amount) {
    this.balance += amount;
    console.log(
      `${amount} deposited successfully. Your new balance is: ${this.balance}`
    );
  },
  withdraw: function (amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(
        `${amount} withdraw successfully. Your new balance is: ${this.balance}`
      );
    } else {
      console.log("Sorry, You don't have sufficient balance :(");
    }
  },
};

customer.deposit(2000);
customer.withdraw(1000);
