/* History implementations must implement:
 * record(id, data)
 * forEach(func)
 * */

var Promise = require('bluebird');
var redis = Promise.promisifyAll(require("redis"));

var RedisHistory = module.exports = function(options) {
  var self = {};

  self.client = createRedisClient(options);

  self.record = function(id, data) {
    var key = keyFor(id);

    self.client.set(key, data);
  };

  self.getAll = function() {

    return self.client
      .keysAsync('*')
      .map(function(key) {
        return self.client.getAsync(key);
      });
  };

  function createRedisClient(options) {
    var port = options.port || 6379;
    var server = options.host || '127.0.0.1';
    var options = options.options || {};

    return redis.createClient(port, server, options);
  }

  function keyFor(id) {
    return id.toString();
  }

  function epoch() {
    return Math.floor(new Date() / 1000);
  }


  return self;
};
