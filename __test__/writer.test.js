const { write, writeJson } = require('../writers/writer');
const fs = require('fs');

fs.writeFileSync = jest.fn();

describe('writer.js test', () => {

  it('writes a file with the provided path and string', () => {
    write('testing', './data_test/testing.txt');
    expect(fs.writeFileSync.mock.calls[0][0]).toBe('./data_test/testing.txt');
    expect(fs.writeFileSync.mock.calls[0][1]).toBe('testing');
  });

  it('writes a file with stringified object and path', () => {
    writeJson({ dog: true }, './data_test/testing_json.txt');
    expect(fs.writeFileSync.mock.calls[1][0]).toBe('./data_test/testing_json.txt');
    expect(fs.writeFileSync.mock.calls[1][1]).toBe(JSON.stringify({ dog: true }, null, 2));
  });

});