const { execSync } = require('child_process');

function install(path, arr, dev) {
  console.log('Installer Started');
  arr.forEach(dependency => execSync(`npm i${dev ? ' -D' : ''} ${dependency}`, {
    cwd: path,
    stdio: 'inherit'
  }));
  console.log('Installer Finished');
}

module.exports = {
  install
};
