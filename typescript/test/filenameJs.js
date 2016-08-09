"use strict";
const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const expect = Code.expect;
const index_1 = require('../index');
lab.experiment('filenameJs', function () {
    lab.before(function (done) {
        done();
    });
    lab.test('should return the correct extension', function (done) {
        expect(index_1.filenameJs.extension('test')).to.equal('');
        expect(index_1.filenameJs.extension('test.jpg')).to.equal('jpg');
        expect(index_1.filenameJs.extension('test.png')).to.equal('png');
        expect(index_1.filenameJs.extension('test.gif')).to.equal('gif');
        expect(index_1.filenameJs.extension('test.123.pdf')).to.equal('pdf');
        done();
    });
    lab.test('should lowercase the extension', function (done) {
        expect(index_1.filenameJs.extension('test.JPG')).to.equal('jpg');
        expect(index_1.filenameJs.extension('test.pNg')).to.equal('png');
        expect(index_1.filenameJs.extension('test.GIF')).to.equal('gif');
        expect(index_1.filenameJs.extension('TEST.123.PDF')).to.equal('pdf');
        done();
    });
    lab.test('should return the correct basename', function (done) {
        expect(index_1.filenameJs.basename('test.jpg')).to.equal('test');
        expect(index_1.filenameJs.basename('tESt.png')).to.equal('tESt');
        expect(index_1.filenameJs.basename('test.gif')).to.equal('test');
        expect(index_1.filenameJs.basename('test.123.pdf')).to.equal('test.123');
        done();
    });
    lab.test('should insert the suffix at the correct position', function (done) {
        expect(index_1.filenameJs.appendSuffix(123, 'test.jpg')).to.equal('test.123.jpg');
        expect(index_1.filenameJs.appendSuffix(123, 'test.png')).to.equal('test.123.png');
        expect(index_1.filenameJs.appendSuffix(123, 'test.gif')).to.equal('test.123.gif');
        expect(index_1.filenameJs.appendSuffix(123, 'test.123.pdf')).to.equal('test.123.123.pdf');
        expect(index_1.filenameJs.appendSuffix(123, 'test')).to.equal('test.123');
        done();
    });
    lab.test('should accept an array of suffixes and append them correctly', function (done) {
        expect(index_1.filenameJs.appendSuffix([123, 'another'], 'test.jpg')).to.equal('test.123.another.jpg');
        expect(index_1.filenameJs.appendSuffix([123, 'another'], 'test.png')).to.equal('test.123.another.png');
        expect(index_1.filenameJs.appendSuffix([123, 'another'], 'test.gif')).to.equal('test.123.another.gif');
        expect(index_1.filenameJs.appendSuffix([123, 'another'], 'test.123.pdf')).to.equal('test.123.123.another.pdf');
        expect(index_1.filenameJs.appendSuffix([123, 'another'], 'test')).to.equal('test.123.another');
        done();
    });
    lab.test('should not insert anything if delimiter is null or empty', function (done) {
        expect(index_1.filenameJs.appendSuffixWithDelimiter([123, 'another'], '', 'test.jpg')).to.equal('test123another.jpg');
        expect(index_1.filenameJs.appendSuffixWithDelimiter([123, 'another'], '', 'test.png')).to.equal('test123another.png');
        expect(index_1.filenameJs.appendSuffixWithDelimiter([123, 'another'], '', 'test.gif')).to.equal('test123another.gif');
        expect(index_1.filenameJs.appendSuffixWithDelimiter([123, 'another'], '', 'test.123.pdf')).to.equal('test.123123another.pdf');
        expect(index_1.filenameJs.appendSuffixWithDelimiter([123, 'another'], '', 'test')).to.equal('test123another');
        done();
    });
    lab.test('should return the correct directory name with as few modifications as possible', function (done) {
        expect(index_1.filenameJs.directoryName('/this/is/a/file.js')).to.equal('/this/is/a');
        expect(index_1.filenameJs.directoryName('/this/is/a')).to.equal('/this/is/a');
        expect(index_1.filenameJs.directoryName('/this/is/a/')).to.equal('/this/is/a/');
        expect(index_1.filenameJs.directoryName('this/is/a')).to.equal('this/is/a');
        expect(index_1.filenameJs.directoryName('file.js')).to.equal('');
        done();
    });
    lab.test('should remove the last suffix', function (done) {
        expect(index_1.filenameJs.removeSuffix('test.123.jpg')).to.equal('test.jpg');
        expect(index_1.filenameJs.removeSuffix('test.123.png')).to.equal('test.png');
        expect(index_1.filenameJs.removeSuffix('test.123.gif')).to.equal('test.gif');
        expect(index_1.filenameJs.removeSuffix('test.456.123.pdf')).to.equal('test.456.pdf');
        expect(index_1.filenameJs.removeSuffix('test')).to.equal('test');
        done();
    });
    lab.test('should do nothing if no suffix is found for the given delimiter', function (done) {
        expect(index_1.filenameJs.removeSuffixWithDelimiter('-', 'test.123.jpg')).to.equal('test.123.jpg');
        expect(index_1.filenameJs.removeSuffixWithDelimiter('-', 'test.123.png')).to.equal('test.123.png');
        expect(index_1.filenameJs.removeSuffixWithDelimiter('-', 'test.123.gif')).to.equal('test.123.gif');
        expect(index_1.filenameJs.removeSuffixWithDelimiter('-', 'test.456.123.pdf')).to.equal('test.456.123.pdf');
        expect(index_1.filenameJs.removeSuffixWithDelimiter('-', 'test')).to.equal('test');
        done();
    });
});
//# sourceMappingURL=filenameJs.js.map