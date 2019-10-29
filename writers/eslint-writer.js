const { writeJson } = require('./writer');
const fs = require('fs');

function write(path) {
  const data = fs.readFileSync('filesToWrite/.eslintrc', 'utf8');
  writeJson(JSON.parse(data), `${path}/.eslintrc`);
}

module.exports = {
  write
};
