const writer = require('./writer').write;
const fs = require('fs');

function write(path) {
  const data = fs.readFileSync(`${__dirname}/../filesToWrite/webpack.config.js`, 'utf8');
  writer(data, `${path}/webpack.config.js`);
}

module.exports = {
  write
};