class Phone {
  contacts = [];

  constructor(phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  makeCall(contactName) {
    const contactIsFound = this.contacts.find(contact => contact.name === contactName);
    const parsedNum = +contactName;
    const isValidNumber = contactName.length === 10 && typeof parsedNum === 'number';
    if (contactIsFound || isValidNumber) {
      return `Calling ${contactName}...`;
    } else {
      return `Invalid`;
    }
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

  removeContact(contactName) {
    const contactIndex = this.contacts.findIndex(contact => contact.name === contactName);
    if (contactIndex === -1) return `Contact not found.`;
    this.contacts.splice(contactIndex, 1);
    return `${contactName} removed.`;
  }

}

class AppleIPhone extends Phone {
  constructor(phoneNumber, model) {
    super(phoneNumber);
    this.model = model;
  }

  sendIMessage(phone, message) {
    if (phone instanceof AppleIPhone) {
      return `Message: ${message} - sent from ${this.model}`;
    } else {
      return `Message could not be sent.`;
    }
  }
}

const myPhone = new Phone('3448731233');
console.log(myPhone);

module.exports = {
  Phone,
  AppleIPhone,
};
