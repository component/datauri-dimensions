
/**
 * Module dependencies.
 */

var toArray = require('data-uri-to-u8');
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
  var arr = toArray(uri);
  return 'image/jpeg' == arr.type
    ? jpeg(arr)
    : png(arr);
};
