import { sendMessageToMain } from '../../messages/messages.utils';
import { closeWindowMessage, maximizeWindowMessage, minimizeWindowMessage } from '../../messages/messages.creator';

window.windowControl = {
  closeWindow() {
    sendMessageToMain(closeWindowMessage());
  },
  minimizeWindow() {
    sendMessageToMain(minimizeWindowMessage());
  },
  maximizeWindow() {
    sendMessageToMain(maximizeWindowMessage());
  }
}
