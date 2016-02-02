(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.filenamejs = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = {
  extension: extension,
  basename: basename,
  removeSuffix: removeSuffix,
  removeSuffixWithDelimiter: removeSuffixWithDelimiter,
  appendSuffix: appendSuffix,
  appendSuffixWithDelimiter: appendSuffixWithDelimiter,
  directoryName: directoryName
}

function extension(filename) {
  var lastIndexOfDot = filename.lastIndexOf('.');
  if (lastIndexOfDot === -1) {
    return '';
  }
  return filename.substr(lastIndexOfDot + 1).toLowerCase();
};

function basename(filename) {
  var fileExtension = this.extension(filename)
  if (!Boolean(fileExtension)) {
    return filename;
  }
  return filename.substr(0, filename.lastIndexOf('.'));
}

function removeSuffix(filename) {
  return this.removeSuffixWithDelimiter('.', filename);
}

function removeSuffixWithDelimiter(delimiter, filename) {
  var fileExtension = this.extension(filename);
  var fileBasename = this.basename(filename);
  var lastIndexOfDelimiter = fileBasename.lastIndexOf(delimiter);
  if (lastIndexOfDelimiter === -1) {
    return filename;
  }
  return fileBasename.substr(0, lastIndexOfDelimiter) + '.' + fileExtension;
}

function appendSuffix(suffix, filename) {
  return this.appendSuffixWithDelimiter(suffix, '.', filename)
}

function appendSuffixWithDelimiter(suffix, delimiter, filename) {
  if (Object.prototype.toString.call(suffix) !== '[object Array]' ) {
    suffix = [suffix];
  }

  var fileExtension = this.extension(filename);
  var newFilename = [this.basename(filename), delimiter].concat(suffix.join(delimiter));

  if (fileExtension) {
    newFilename.push('.');
    newFilename.push(fileExtension);
  }

  return newFilename.join('');
}


function directoryName(filename) {
  if (!this.extension(filename)) {
    return filename;
  }
  return filename.substr(0, filename.lastIndexOf('/'));
}


},{}]},{},[1])(1)
});