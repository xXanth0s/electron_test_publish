import { storageSchema } from '../storage/config/storage.schema';

const Store = require('electron-store');

export class ToDoService {
  #tasks = {};

  #currentIndex = -1
  #store = new Store({ schema: storageSchema });

  constructor() {
    this.#loadStore();
  }

  toggleTask(id) {
    this.#tasks[id].checked = !this.#tasks[id].checked;
    this.#updateStore();
  }

  addTask(task) {
    task.id = ++this.#currentIndex;
    this.#tasks[this.#currentIndex] = task
    this.#updateStore();
    return task;
  }

  getAllTasks() {
    return Object.values(this.#tasks);
  }

  #loadStore() {
    this.#currentIndex = this.#store.get('index') || 0;
    this.#tasks = this.#store.get('tasks') || {};
  }

  #updateStore() {
    const storeData = {
      index: this.#currentIndex,
      tasks: this.#tasks
    };


    this.#store.set('index', this.#currentIndex)
    this.#store.set('tasks', this.#tasks)
  }
}
