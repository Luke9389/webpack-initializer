const { writeJson } = require('./writer');
const fs = require('fs');

function write(path) {
  const data = fs.readFileSync(`${__dirname}/../filesToWrite/.babelrc`, 'utf8');
  writeJson(JSON.parse(data), `${path}/.babelrc`);
}

module.exports = {
  write
};