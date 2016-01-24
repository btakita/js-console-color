const chalk = require('chalk')
    , envValue = {
        info: ['green'],
        debug: ['white'],
        log: ['grey'],
        warn: ['red'],
        error: ['red', 'bold']
      }
    , chalk2 = {};
chalk2Refresh();
export function envAssign(...args) {
  const ctx = Object.assign({}, ...args);
  Object.assign(envValue, ctx);
  chalk2Refresh();
  return envValue;
}
export function debug(...args) {
  (console.debug||console.info)(chalk2.debug(...args));
}
export function log(...args) {
  console.log(chalk2.log(...args));
}
export function info(...args) {
  console.info(chalk2.info(...args));
}
export function warn(...args) {
  console.warn(chalk2.warn(...args));
}
export function error(...args) {
  console.error(chalk2.error(...args));
}
function chalk2Refresh() {
  Object.keys(envValue).forEach((consoleMethod) => {
    chalk2[consoleMethod] = [chalk]
      .concat(envValue[consoleMethod]||[])
      .reduce(function(chalk3, chalkMethod) {
        return chalk3[chalkMethod];
      })
  });
}
