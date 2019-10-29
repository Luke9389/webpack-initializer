const installer = require('../dependencies/installer');
const childProcess = require('child_process');

childProcess.execSync = jest.fn();

describe('installer test', () => {

  it('installs dependencies', () => {
    installer('./data/tests.txt', ['thing1', 'thing2'], false);
    expect(childProcess.execSync.mock.calls[0][0]).toBe('npm i  thing1 thing2');

  });

  it('installs dev dependencies', () => {
    installer('./data/tests.txt', ['thing1', 'thing2'], true);
    expect(childProcess.execSync.mock.calls[1][0]).toBe('npm i -D thing1 thing2');
  });

});