# filename.js
[![LambCI](https://lambci-buildresults-h8k26bznx73q.s3.amazonaws.com/gh/66pix/filename.js/branches/master/b012168ec0bd6c8c3a2bd9a41641d2cb.svg)](https://lambci-buildresults-h8k26bznx73q.s3.amazonaws.com/gh/66pix/filename.js/branches/master/0825c08c074026fdcbd7d260bac77eda.html)
[![Code Climate](https://codeclimate.com/github/66pix/filename.js/badges/gpa.svg)](https://codeclimate.com/github/66pix/filename.js)

Browser / Node.js object to aid in manipulating filenames with JavaScript

## Usage


### Get the file extension
```JS
var extension = filenameJs.extension('some/filename/here.js'); // js
```

### Get the file basename
```JS
var basename = filenameJs.basename('some/filename/here.js');   // here
```

### Append any suffix
```JS
filenameJs.appendSuffix(Date.now(), 'filename.js'); // filename.1452851827459.js
```
