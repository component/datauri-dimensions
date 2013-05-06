
/**
 * Module dependencies.
 */

var toBlob = require('data-uri-to-blob');
var jpeg = require('jpeg-size');
var png = require('png-size');

module.exports = function(uri){
  var blob = toBlob(uri);
  return 'image/jpeg' == blob.type
    ? jpeg(blob)
    : png(blob);
};
