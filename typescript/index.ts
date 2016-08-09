export {
  extension,
  basename,
  removeSuffix,
  removeSuffixWithDelimiter,
  appendSuffix,
  appendSuffixWithDelimiter,
  directoryName
}

export const filenameJs = {
  extension: extension,
  basename: basename,
  removeSuffix: removeSuffix,
  removeSuffixWithDelimiter: removeSuffixWithDelimiter,
  appendSuffix: appendSuffix,
  appendSuffixWithDelimiter: appendSuffixWithDelimiter,
  directoryName: directoryName
};

function extension(filename: string) {
  const lastIndexOfDot = filename.lastIndexOf('.');
  if (lastIndexOfDot === -1) {
    return '';
  }
  return filename.substr(lastIndexOfDot + 1).toLowerCase();
};

function basename(filename: string) {
  const fileExtension = this.extension(filename);
  if (!Boolean(fileExtension)) {
    return filename;
  }
  return filename.substr(0, filename.lastIndexOf('.'));
}

function removeSuffix(filename: string) {
  return this.removeSuffixWithDelimiter('.', filename);
}

function removeSuffixWithDelimiter(delimiter: string, filename: string) {
  const fileExtension = this.extension(filename);
  const fileBasename = this.basename(filename);
  const lastIndexOfDelimiter = fileBasename.lastIndexOf(delimiter);
  if (lastIndexOfDelimiter === -1) {
    return filename;
  }
  return fileBasename.substr(0, lastIndexOfDelimiter) + '.' + fileExtension;
}

export type FilenameJSSuffix = number | string | (string | number)[];

function appendSuffix(suffix: FilenameJSSuffix, filename: string) {
  return this.appendSuffixWithDelimiter(suffix, '.', filename);
}

function appendSuffixWithDelimiter(_suffix_: FilenameJSSuffix, delimiter: string, filename: string) {
  let suffix: string[] = (_suffix_ as string[]);
  if (Object.prototype.toString.call(_suffix_) !== '[object Array]' ) {
    suffix = [(_suffix_ as string)];
  }

  const fileExtension = this.extension(filename);
  const newFilename = [this.basename(filename), delimiter].concat(suffix.join(delimiter));

  if (fileExtension) {
    newFilename.push('.');
    newFilename.push(fileExtension);
  }

  return newFilename.join('');
}


function directoryName(filename: string) {
  if (!this.extension(filename)) {
    return filename;
  }
  return filename.substr(0, filename.lastIndexOf('/'));
}

