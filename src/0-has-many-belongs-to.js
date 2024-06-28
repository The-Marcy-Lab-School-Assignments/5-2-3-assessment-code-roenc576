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

  #items = [];

  constructor(name) {
    this.id = getId();
    this.name = name;
  }

  createItem(description, priorityLevel) {
    const item = new ToDoItem(description, priorityLevel);
    [...this.#items].push(item);
    return item;
  }

  getItems() {

  }

  getCompletedCount() {

  }

}

module.exports = {
  ToDoItem,
  ToDoList
};