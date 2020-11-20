/**
 * @function getPrefColorScheme
 * @description used to get the system dark mode is enabled or not
 * @returns {Boolean}
 */
function getPrefColorScheme() {
  const isDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches;

  return isDarkMode === undefined ? false : isDarkMode;
}

export default getPrefColorScheme;
