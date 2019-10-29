const { installDevDeps } = require('./dev-dependencies-installer');
const { installDeps } = require('./dependencies-installer');
const babelWriter = require('./writers/babel-writer').write;
const eslintWriter = require('./writers/eslint-writer').write;
const gitignoreWriter = require('./writers/gitignore-writer').write;
const packageJsonWriter = require('./writers/package-json-writer').write;
const srcWriter = require('./writers/src-index-writer').write;
const travisWriter = require('./writers/travis-writer').write;
const webpackWriter = require('./writers/webpack-writer').write;
const fs = require('fs');

const path = process.argv[2];

if (path !== '.' && !fs.existsSync(path)) {
  fs.mkdirSync(path);
  fs.mkdirSync(`${path}/src`)
};

Promise.all([
  babelWriter(path),
  eslintWriter(path),
  gitignoreWriter(path),
  packageJsonWriter(path),
  srcWriter(path),
  travisWriter(path),
  webpackWriter(path)
])
  .then(() => {
    installDeps(path);
    installDevDeps(path);
  });


