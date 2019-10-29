const writer = require('./writer').write;
const fs = require('fs');

function write(path) {
  const indexHTML = fs.readFileSync('filesToWrite/src/index.html', 'utf8');
  const setupTests = fs.readFileSync('filesToWrite/src/setupTests.js', 'utf8');
  writer(indexHTML, `${path}/src/index.html`);
  writer('', `${path}/src/index.js`);
  writer(setupTests, `${path}/src/setupTests.js`);
}

module.exports = {
  write
};