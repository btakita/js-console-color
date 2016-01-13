const chalk = require('chalk');
var env2 = {
  info: ['green'],
  debug: ['white'],
  log: ['grey'],
  warn: ['red'],
  error: ['red', 'bold']
};
export function env(val) {
  if (val) {
    env2 = val;
  }
  return env2;
}
export function debug() {
  var chalk3 = chalk2('debug');
  console.info(chalk3.apply(chalk3, arguments));
}
export function log() {
  var chalk3 = chalk2('log');
  console.info(chalk3.apply(chalk3, arguments));
}
export function info() {
  var chalk3 = chalk2('info');
  console.info(chalk3.apply(chalk3, arguments));
}
export function warn() {
  var chalk3 = chalk2('warn');
  console.info(chalk3.apply(chalk3, arguments));
}
export function error() {
  var chalk3 = chalk2('error');
  console.info(chalk3.apply(chalk3, arguments));
}
function chalk2(consoleMethod) {
  return [chalk].concat(env2[consoleMethod]||[]).reduce(function(chalk3, chalkMethod) {
    return chalk3[chalkMethod];
  });
}
