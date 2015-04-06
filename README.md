## dashing-js redis store

_Important:_ Based on the [Sparkbox fork of dashing-js](https://github.com/sparkbox/dashing-js)
fork of [dashing-js](https://github.com/fabiocaseri/dashing-js).

## Getting Started

dashing-js-redis is added to your dashing-js generated project.

1. `npm install --save dashing-js-redis`
2. Update `server.js`:

```
var dashing = require('dashing-js').Dashing();
var RedisHistory = require('dashing-js-redis');

dashing.useHistoryStore(new RedisHistory());

dashing.start();
```

## Configuration

Options for
[`redis.createClient`](https://www.npmjs.com/package/redis#rediscreateclient) can be provided via the `RedisHistory`
constructor.

### Example
```
var history = new RedisHistory( {
  port: 6379,
  host: '127.0.0.1',
  options: { /* other options */ }
});

dashing.useHistoryStore(history);
```
