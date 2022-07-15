/**
 * Add package version to compiled js dist file
 */
const package = require('../package.json');
const path = require('path');
const ROOT_DIR = path.join(__dirname, '..');
const fs = require('fs');

const FILE_TO_ADD_VERSION = path.join(ROOT_DIR, package.main);
const packageName = package.name;
const packageVersion = package.version;

const versionComment = `/*
* ${packageName} v${packageVersion}
*/
`;

const addVersionToFile = () => {
  const data = fs.readFileSync(FILE_TO_ADD_VERSION);
  const fd = fs.openSync(FILE_TO_ADD_VERSION, 'w+');
  const buffer = Buffer.from(versionComment);

  fs.writeSync(fd, buffer, 0, buffer.length, 0); // write new data
  fs.writeSync(fd, data, 0, data.length, buffer.length); // append old data
  fs.close(fd);
};

addVersionToFile();
