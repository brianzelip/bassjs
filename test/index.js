
import bassSpec from './bass.spec.js'

(function (win) {
/**
 * Returned function is used to kick off tests
 */
function createStartFn(karma) {
  return function () {
    console.log('hello')
    bassSpec
  };
}

/**
 * Returned function is used for logging by Karma
 */
function createDumpFn(karma, serialize) {
  // inside you could use a custom `serialize` function
  // to modify or attach messages or hook into logging
  return function () {
    karma.info({ dump: [].slice.call(arguments) });
  };
}

win.__karma__.start = createStartFn(window.__karma__);
win.dump = createDumpFn(win.__karma__, function (value) {
  return value;
});
})(window);

