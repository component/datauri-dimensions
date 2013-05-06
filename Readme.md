
# datauri-dimensions

  Parse the dimensions of a data URI png / jpeg

## Installation

    $ component install component/datauri-dimensions

## Example

```js
var size = require('datauri-dimensions');

var canvas = document.createElement('canvas');
canvas.width = 100;
canvas.height = 150;

var uri = canvas.toDataURL('image/jpeg');
console.log(size(uri));

var uri = canvas.toDataURL('image/png');
console.log(size(uri));
```

## License

  MIT
