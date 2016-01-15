# filename.js
[![Circle CI](https://circleci.com/gh/66pix/filename.js.svg?style=svg)](https://circleci.com/gh/66pix/filename.js)
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
