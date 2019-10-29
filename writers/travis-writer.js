const writer = require('./writer').write;
const fs = require('fs');

function write(path) {
  const data = fs.readFileSync('filesToWrite/.travis.yml', 'utf8');
  writer(data, `${path}/.travis.yml`);
}

module.exports = {
  write
};