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
