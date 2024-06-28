const bankAccountFactory = (balance) => {

  return {
    checkBalance() {
      if (!balance) balance = 0;
      return balance;
    },

    add(amount) {
      balance += amount;
      console.log(`$${amount} added.`);
    },

    subtract(amount) {
      balance -= amount;
      console.log(`$${amount} subtracted.`);
    }
  }


};

module.exports = {
  bankAccountFactory,
};
