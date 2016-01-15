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

  lab.it('should return the correct extension', function(done) {
    expect(filenameJs.extension('test')).to.equal('');
    expect(filenameJs.extension('test.jpg')).to.equal('jpg');
    expect(filenameJs.extension('test.png')).to.equal('png');
    expect(filenameJs.extension('test.gif')).to.equal('gif');
    expect(filenameJs.extension('test.123.pdf')).to.equal('pdf');
    done();
  });

  lab.it('should return the correct basename', function(done) {
    expect(filenameJs.basename('test.jpg')).to.equal('test');
    expect(filenameJs.basename('test.png')).to.equal('test');
    expect(filenameJs.basename('test.gif')).to.equal('test');
    expect(filenameJs.basename('test.123.pdf')).to.equal('test.123');
    done();
  });

  lab.it('should insert the timestamp at the correct position', function(done) {
    expect(filenameJs.appendSuffix(123, 'test.jpg')).to.equal('test.123.jpg');
    expect(filenameJs.appendSuffix(123, 'test.png')).to.equal('test.123.png');
    expect(filenameJs.appendSuffix(123, 'test.gif')).to.equal('test.123.gif');
    expect(filenameJs.appendSuffix(123, 'test.123.pdf')).to.equal('test.123.123.pdf');
    expect(filenameJs.appendSuffix(123, 'test')).to.equal('test.123');
    done();
  });

  lab.it('should return the correct directory name with as few modifications as possible', function(done) {
    expect(filenameJs.directoryName('/this/is/a/file.js')).to.equal('/this/is/a');
    expect(filenameJs.directoryName('/this/is/a')).to.equal('/this/is/a');
    expect(filenameJs.directoryName('/this/is/a/')).to.equal('/this/is/a/');
    expect(filenameJs.directoryName('this/is/a')).to.equal('this/is/a');
    expect(filenameJs.directoryName('file.js')).to.equal('');
    done();
  })
})

