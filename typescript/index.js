"use strict";
exports.filenameJs = {
    extension: extension,
    basename: basename,
    removeSuffix: removeSuffix,
    removeSuffixWithDelimiter: removeSuffixWithDelimiter,
    appendSuffix: appendSuffix,
    appendSuffixWithDelimiter: appendSuffixWithDelimiter,
    directoryName: directoryName
};
function extension(filename) {
    var lastIndexOfDot = filename.lastIndexOf('.');
    if (lastIndexOfDot === -1) {
        return '';
    }
    return filename.substr(lastIndexOfDot + 1).toLowerCase();
}
exports.extension = extension;
;
function basename(filename) {
    var fileExtension = this.extension(filename);
    if (!Boolean(fileExtension)) {
        return filename;
    }
    return filename.substr(0, filename.lastIndexOf('.'));
}
exports.basename = basename;
function removeSuffix(filename) {
    return this.removeSuffixWithDelimiter('.', filename);
}
exports.removeSuffix = removeSuffix;
function removeSuffixWithDelimiter(delimiter, filename) {
    var fileExtension = this.extension(filename);
    var fileBasename = this.basename(filename);
    var lastIndexOfDelimiter = fileBasename.lastIndexOf(delimiter);
    if (lastIndexOfDelimiter === -1) {
        return filename;
    }
    return fileBasename.substr(0, lastIndexOfDelimiter) + '.' + fileExtension;
}
exports.removeSuffixWithDelimiter = removeSuffixWithDelimiter;
function appendSuffix(suffix, filename) {
    return this.appendSuffixWithDelimiter(suffix, '.', filename);
}
exports.appendSuffix = appendSuffix;
function appendSuffixWithDelimiter(_suffix_, delimiter, filename) {
    var suffix = _suffix_;
    if (Object.prototype.toString.call(_suffix_) !== '[object Array]') {
        suffix = [_suffix_];
    }
    var fileExtension = this.extension(filename);
    var newFilename = [this.basename(filename), delimiter].concat(suffix.join(delimiter));
    if (fileExtension) {
        newFilename.push('.');
        newFilename.push(fileExtension);
    }
    return newFilename.join('');
}
exports.appendSuffixWithDelimiter = appendSuffixWithDelimiter;
function directoryName(filename) {
    if (!this.extension(filename)) {
        return filename;
    }
    return filename.substr(0, filename.lastIndexOf('/'));
}
exports.directoryName = directoryName;
//# sourceMappingURL=index.js.map