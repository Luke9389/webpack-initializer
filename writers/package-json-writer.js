const { writeJson } = require('./writer');
const fs = require('fs');

function write(path) {
  const data = fs.readFileSync('filesToWrite/package.json', 'utf8');
  writeJson(JSON.parse(data), `${path}/package.json`);
}

module.exports = {
  write
};
