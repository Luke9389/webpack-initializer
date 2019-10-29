const writer = require('./writer').write;
const fs = require('fs');

function write(path) {
  const data = fs.readFileSync(`${__dirname}/../filesToWrite/gitignore`, 'utf8');
  writer(data, `${path}/.gitignore`);
}

module.exports = {
  write
};