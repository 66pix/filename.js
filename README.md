# filename.js

Utility object to aid in manipulating filenames with JavaScript

## Usage


### Get the file extension
```JS
var extension = filenameJs.extension('some/filename/here.js'); // js
```

### Get the file's basename
```JS
var basename = filenameJs.basename('some/filename/here.js');   // here
```

### Append any suffix
```
filenameJs.appendSuffix(Date.now(), 'filename.js'); // filename.1452851827459.js
```
