import { ChromeAction, ChromeState } from "./../utils";
import { window } from "@tauri-apps/api";

export const chromeAction = async (action?: ChromeAction) => {
  const currentWindow = window.getCurrent();
  let chromeState: ChromeState = ChromeState.Restored;

  if (await currentWindow.isMaximized()) {
    chromeState = ChromeState.Maximized;
  }
  if (await currentWindow.isFullscreen()) {
    chromeState = ChromeState.FullScreen;
  }

  switch (action) {
    case ChromeAction.Minimize:
      currentWindow.minimize();
      chromeState = ChromeState.Minimized;
      console.log("minimize");
      break;
    case ChromeAction.Maximize:
      currentWindow.maximize();
      chromeState = ChromeState.Maximized;
      break;
    case ChromeAction.Restore:
      currentWindow.unmaximize();
      chromeState = ChromeState.Restored;
      break;
    case ChromeAction.Close:
      currentWindow.close();
      break;
  }
  return chromeState;
};
