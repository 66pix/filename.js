'use strict';

module.exports = {
  extension: extension,
  basename: basename,
  appendSuffix: appendSuffix
}

function extension(filename) {
  var lastIndexOfDot = filename.lastIndexOf('.');
  if (lastIndexOfDot === -1) {
    return '';
  }
  return filename.substr(lastIndexOfDot + 1);
};

function basename(filename) {
  var fileExtension = this.extension(filename)
  if (!Boolean(fileExtension)) {
    return filename;
  }
  return filename.substr(0, filename.lastIndexOf('.'));
}

function appendSuffix(suffix, filename) {
  var fileExtension = this.extension(filename);

  var newFilename = [
    this.basename(filename), '.', suffix
  ];

  if (fileExtension) {
    newFilename.push('.');
    newFilename.push(fileExtension);
  }

  return newFilename.join('');
}

