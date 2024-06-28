const { getId } = require('./utils');

class ToDoItem {
  constructor(description, priorityLevel, deadline) {
    this.id = getId();
    this.description = description;
    this.priorityLevel = priorityLevel;
    this.deadline = deadline;
    this.isDone = false;
  }

  getItem() {
    if (!this.isDone) {
      console.log(`You still have to ${this.description}`);
    }
    return this;
  }
}

class ToDoList {
  static #lists = [];
  #items = [];
  #schedule = [];
  owner = '';

  constructor(name, owner) {
    this.id = getId();
    this.name = name;
    this.owner = owner
    ToDoList.#lists.push(this);
  }

  createItem(description, priorityLevel, deadline) {
    const item = new ToDoItem(description, priorityLevel, deadline);

    // Insert item into the schedule in the correct order
    let inserted = false;
    for (let i = 0; i < this.#schedule.length; i++) {
      if (item.deadline < this.#schedule[i].deadline) {
        this.#schedule.splice(i, 0, item);
        inserted = true;
        break;
      }
    }

    if (!inserted) {
      this.#schedule.push(item);
    }

    this.#items.push(item);
    return item;
  }

  getItems() {
    return [...this.#items];
  }

  getCompletedCount() {
    return [...this.#items].filter(item => item.isDone).length;
  }

  printSchedule() {
    let msg = `Hi hi :D Here's the order you should do these things in: `;

    this.#schedule.forEach(item => {
      msg += `\n- ${item.description} (Deadline in ${item.deadline} hours)`;
    });

    console.log(msg);
  }

  static list() {
    return [...this.#lists];
  }

  static findBy(listId) {
    return [...this.#lists].find(list => list.id === listId);
  }
}

const myList = new ToDoList("rawr");
myList.createItem('laundry', 8, 3);
myList.createItem('homework', 10, 4);
myList.createItem('groceries', 4, 1);
myList.createItem('dog', 7, 1);
myList.printSchedule();


module.exports = {
  ToDoItem,
  ToDoList
};
