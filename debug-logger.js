var debugLogger = require('debug-logger');

debugLogger.inspectOptions = {
  colors: true,
};
debugLogger.levels.vrb = {
  // color: debugLogger.colors.magenta,
  namespaceSuffix: ':vrb'
};


module.exports = debugLoggerWrapper;

function debugLoggerWrapper(namespace) {
  var logger = debugLogger(namespace);
  debugLogger.debug.enable(namespace + '*');
  return logger;
}
