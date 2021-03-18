import '../../../pollyfills'

import { sendMessageToMain } from '../../../messages/messages.utils';
import { addToDoTaskMessage } from '../../../messages/messages.creator';
import { addInputMissingError, getTaskDataFromHtml } from './html';


window.toDoAddTask = {
  addTask() {
    const task = getTaskDataFromHtml();
    if (isTaskValid(task)) {
      sendMessageToMain(addToDoTaskMessage({ task }))
    } else {
      addInputMissingError();
    }
  },
}

function isTaskValid(task) {
  return Boolean(task.title) && Boolean(task.description)
}

