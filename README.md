# LZ78
LZ78 lossless compression algorithm in Node

This is a modified LZ78 implementation that uses 280 to denote the escape char.

This package is available at https://www.npmjs.com/package/lz78

## Usage

```
npm install lz78
```

```
var LZ = require('lz78');
let encoded = LZ.encode('<your string here>');
let decoded = LZ.decode(encoded);
```