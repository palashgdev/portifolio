import { LIGHT_MODE, DARK_MODE } from "../constant/darkMode";

export const switchToDarkMode = dispatch => () =>
  dispatch({
    type: DARK_MODE
  });

export const switchToLightMode = dispatch => () =>
  dispatch({
    type: LIGHT_MODE
  });
