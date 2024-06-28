const { getId } = require('./utils');

class ToDoItem {
  constructor(description, priorityLevel) {
    this.id = getId();
    this.description = description;
    this.priorityLevel = priorityLevel;
    this.isDone = false;
  }
}


class ToDoList {
  static #lists = [];
  #items = [];

  constructor(name) {
    this.id = getId();
    this.name = name;
    ToDoList.#lists.push(this);
  }

  createItem(description, priorityLevel) {
    const item = new ToDoItem(description, priorityLevel);
    this.#items.push(item);
    return item;
  }

  getItems() {
    return [...this.#items];
  }

  getCompletedCount() {
    return [...this.#items].filter(item => item.isDone === true).length;
  }

  static list() {
    return [...this.#lists];
  }

  static findBy() {

  }

}

module.exports = {
  ToDoItem,
  ToDoList
};