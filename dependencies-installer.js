const { install } = require('./installer');

const deps = ['react', 'react-dom'];

function installDeps(path) {
  install(path, deps, false);
}

module.exports = {
  installDeps
};
