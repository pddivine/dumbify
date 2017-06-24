module.exports = dumbify;

function dumbify () {
  const exceptions = Array.from(arguments);
  Object.getOwnPropertyNames(window).forEach(prop => {
    if ( !exceptions.includes(prop) ) {
      delete window[prop];
    }
  });
}