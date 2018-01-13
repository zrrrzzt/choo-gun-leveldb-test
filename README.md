# choo-gun-leveldb-test

[![Greenkeeper badge](https://badges.greenkeeper.io/zrrrzzt/choo-gun-leveldb-test.svg)](https://greenkeeper.io/)

Test to make a happy family of [choo](https://choo.io), [gun](https://github.com/amark/gun) and levelDB ([gun-level](https://github.com/PsychoLlama/gun-level))

It is a bit hacky, but it kind of works

## Setup

Clone the repo and do `npm install`

After the installation you have to do a couple of small adjustments to the gun-level module.

`node_modules/gun-level/dist/index.js`

In line 7 change `var _gun = require('gun/gun');` to `var _gun = require('gun');`

`node_modules/gun-level/dist/Adapter/index.js`

In line 23 change `var _gun = require('gun/gun');` to `var _gun = require('gun');`

Now you're ready and can run `npm start`and visit [localhost:8080](https://localhost:8080)


## Known problems

`bankai`will stop everytime you do a code change with live reload due to a LOCK from levelDB

Just do another `npm start`and you're back up

## License

[MIT](LICENSE)