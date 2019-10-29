const fs = require('fs');

function write(str, path) {
  fs.writeFileSync(path, str);
  console.log(path);
}

function writeJson(obj, path) {
  fs.writeFileSync(path, JSON.stringify(obj));
  console.log(path);
}

module.exports = {
  write,
  writeJson
};
