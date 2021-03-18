import { messageCreator } from './messages.utils';

// Renderer
export const openAddToDoTaskPageMessage = messageCreator('openAddToDoTaskPage');

export const addToDoTaskMessage = messageCreator('addToDoTask');

export const toggleToDoTaskMessage = messageCreator('toggleToDoTask');

export const getAllToDoTasks = messageCreator('getAllToDoTasks');

export const closeWindowMessage = messageCreator('closeWindow');
export const minimizeWindowMessage = messageCreator('minimzeWindow');
export const maximizeWindowMessage = messageCreator('maximizeWindow');


// Main
export const toDoTaskAddedMessage = messageCreator('toDoTaskAdded');
