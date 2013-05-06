
/**
 * Module dependencies.
 */

var toBlob = require('data-uri-to-blob');
var jpeg = require('jpeg-size');
var png = require('png-size');

/**
 * Return the dimensions of data `uri`.
 *
 * @param {String} uri
 * @return {Object}
 * @api public
 */

module.exports = function(uri){
  var blob = toBlob(uri);
  return 'image/jpeg' == blob.type
    ? jpeg(blob)
    : png(blob);
};
