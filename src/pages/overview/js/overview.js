import '../../../pollyfills'

import { invokeMessageToMain, sendMessageToMain } from '../../../messages/messages.utils';
import {
  getAllToDoTasks,
  openAddToDoTaskPageMessage,
  toDoTaskAddedMessage,
  toggleToDoTaskMessage
} from '../../../messages/messages.creator';
import { addTaskToHtml } from './html';
import { ipcRenderer } from 'electron'


window.toDo = {
  toggleTask(id) {
    sendMessageToMain(toggleToDoTaskMessage({ id }))
  },
  openAddToDoTaskPage() {
    sendMessageToMain(openAddToDoTaskPageMessage())
  }
}

function registerMessageHandlers() {
  ipcRenderer.on(toDoTaskAddedMessage.type, (event, args) => {
    addTaskToHtml(args.payload.task)
  });
}

async function loadTasks() {
  try {
    const tasks = await invokeMessageToMain(getAllToDoTasks());
    tasks.forEach(addTaskToHtml);
  } catch (e) {
    console.error('[loadTasks] Error occrued while loading the tasks from main', e);
  }
}

loadTasks()
registerMessageHandlers();
