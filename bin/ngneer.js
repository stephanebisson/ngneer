#!/usr/bin/env node

var args = process.argv.slice(2);

var ngneer = require('../lib/ngneer.js');

new ngneer.App(args).run();