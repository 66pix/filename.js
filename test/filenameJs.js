'use strict';

var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script();
var expect = Code.expect;

lab.experiment('filenameJs', function() {

  var filenameJs;
  lab.before(function(done) {
    filenameJs = require('../index.js');
    done();
  })

  lab.test('should export a module if exports is defined', function(done) {
    expect(require('../index.js').basename).to.be.instanceof(Function);
    done();
  })

  lab.test('should return the correct extension', function(done) {
    expect(filenameJs.extension('test')).to.equal('');
    expect(filenameJs.extension('test.jpg')).to.equal('jpg');
    expect(filenameJs.extension('test.png')).to.equal('png');
    expect(filenameJs.extension('test.gif')).to.equal('gif');
    expect(filenameJs.extension('test.123.pdf')).to.equal('pdf');
    done();
  })

  lab.test('should lowercase the extension', function(done) {
    expect(filenameJs.extension('test.JPG')).to.equal('jpg');
    expect(filenameJs.extension('test.pNg')).to.equal('png');
    expect(filenameJs.extension('test.GIF')).to.equal('gif');
    expect(filenameJs.extension('TEST.123.PDF')).to.equal('pdf');
    done();
  })

  lab.test('should return the correct extension', function(done) {
    expect(filenameJs.extension('test')).to.equal('');
    expect(filenameJs.extension('test.jpg')).to.equal('jpg');
    expect(filenameJs.extension('test.png')).to.equal('png');
    expect(filenameJs.extension('test.gif')).to.equal('gif');
    expect(filenameJs.extension('test.123.pdf')).to.equal('pdf');
    done();
  });

  lab.test('should return the correct basename', function(done) {
    expect(filenameJs.basename('test.jpg')).to.equal('test');
    expect(filenameJs.basename('tESt.png')).to.equal('tESt');
    expect(filenameJs.basename('test.gif')).to.equal('test');
    expect(filenameJs.basename('test.123.pdf')).to.equal('test.123');
    done();
  });

  lab.test('should insert the suffix at the correct position', function(done) {
    expect(filenameJs.appendSuffix(123, 'test.jpg')).to.equal('test.123.jpg');
    expect(filenameJs.appendSuffix(123, 'test.png')).to.equal('test.123.png');
    expect(filenameJs.appendSuffix(123, 'test.gif')).to.equal('test.123.gif');
    expect(filenameJs.appendSuffix(123, 'test.123.pdf')).to.equal('test.123.123.pdf');
    expect(filenameJs.appendSuffix(123, 'test')).to.equal('test.123');
    done();
  });

  lab.test('should accept an array of suffixes and append them correctly', function(done) {
    expect(filenameJs.appendSuffix([123, 'another'], 'test.jpg')).to.equal('test.123.another.jpg');
    expect(filenameJs.appendSuffix([123, 'another'], 'test.png')).to.equal('test.123.another.png');
    expect(filenameJs.appendSuffix([123, 'another'], 'test.gif')).to.equal('test.123.another.gif');
    expect(filenameJs.appendSuffix([123, 'another'], 'test.123.pdf')).to.equal('test.123.123.another.pdf');
    expect(filenameJs.appendSuffix([123, 'another'], 'test')).to.equal('test.123.another');
    done();
  });

  lab.test('should not insert anything if delimiter is null or empty', function(done) {
    expect(filenameJs.appendSuffixWithDelimiter([123, 'another'], '', 'test.jpg')).to.equal('test123another.jpg');
    expect(filenameJs.appendSuffixWithDelimiter([123, 'another'], '', 'test.png')).to.equal('test123another.png');
    expect(filenameJs.appendSuffixWithDelimiter([123, 'another'], '', 'test.gif')).to.equal('test123another.gif');
    expect(filenameJs.appendSuffixWithDelimiter([123, 'another'], '', 'test.123.pdf')).to.equal('test.123123another.pdf');
    expect(filenameJs.appendSuffixWithDelimiter([123, 'another'], '', 'test')).to.equal('test123another');
    done();
  });

  lab.test('should return the correct directory name with as few modifications as possible', function(done) {
    expect(filenameJs.directoryName('/this/is/a/file.js')).to.equal('/this/is/a');
    expect(filenameJs.directoryName('/this/is/a')).to.equal('/this/is/a');
    expect(filenameJs.directoryName('/this/is/a/')).to.equal('/this/is/a/');
    expect(filenameJs.directoryName('this/is/a')).to.equal('this/is/a');
    expect(filenameJs.directoryName('file.js')).to.equal('');
    done();
  })

  lab.test('should remove the last suffix', function(done) {
    expect(filenameJs.removeSuffix('test.123.jpg')).to.equal('test.jpg');
    expect(filenameJs.removeSuffix('test.123.png')).to.equal('test.png');
    expect(filenameJs.removeSuffix('test.123.gif')).to.equal('test.gif');
    expect(filenameJs.removeSuffix('test.456.123.pdf')).to.equal('test.456.pdf');
    expect(filenameJs.removeSuffix('test')).to.equal('test');
    done();
  });

  lab.test('should do nothing if no suffix is found for the given delimiter', function(done) {
    expect(filenameJs.removeSuffixWithDelimiter('-', 'test.123.jpg')).to.equal('test.123.jpg');
    expect(filenameJs.removeSuffixWithDelimiter('-', 'test.123.png')).to.equal('test.123.png');
    expect(filenameJs.removeSuffixWithDelimiter('-', 'test.123.gif')).to.equal('test.123.gif');
    expect(filenameJs.removeSuffixWithDelimiter('-', 'test.456.123.pdf')).to.equal('test.456.123.pdf');
    expect(filenameJs.removeSuffixWithDelimiter('-', 'test')).to.equal('test');
    done();
  });
})

