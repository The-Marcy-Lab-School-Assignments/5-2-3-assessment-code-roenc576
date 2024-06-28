class Phone {
  contacts = [];

  constructor(phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  makeCall() {

  }

  addContact(contact) {
    const parsedNum = +contact.phoneNumber;
    if (!contact.name || !contact.phoneNumber) {
      return `Invalid`;
    } else if (contact.phoneNumber.length !== 10 || typeof parsedNum !== 'number') {
      return `Invalid`;
    }
    this.contacts.push(contact);
    return `${contact.name} added.`
  }

  removeContact() {

  }

}

class AppleIPhone {

}

const myPhone = new Phone('3448731233');
console.log(myPhone);

module.exports = {
  Phone,
  AppleIPhone,
};
