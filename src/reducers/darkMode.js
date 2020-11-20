import { LIGHT_MODE, DARK_MODE } from "../constant/darkMode";

function darkMode(state, action) {
  switch (action.type) {
    case LIGHT_MODE: {
      return {
        getDarkMode: false
      };
    }

    case DARK_MODE: {
      return {
        getDarkMode: true
      };
    }

    default:
      return state;
  }
}

export default darkMode;
