import React from "react";
import { ChromeState } from "../utils";

export type ChromeContextProps = {
  chrome: ChromeState;
  setChrome: (chrome: ChromeState) => void;
};
export const ChromeContext = React.createContext<ChromeContextProps>({
  chrome: ChromeState.Restored,
  setChrome: () => {},
} as ChromeContextProps);
