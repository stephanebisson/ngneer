#!/usr/bin/env node

'use strict';

var program = require('commander');
var ngneer = require('../lib/ngneer.js').ngneer;
var npmConfig = require('../../package.json');

program.version(npmConfig.version);

program
    .command('vanilla')
    .description('the simplest angularjs single-page app')
    .action(function () {
        ngneer.vanilla();
    });

program
    .command('ipa')
    .description('another angularjs single-page app')
    .action(function () {
        ngneer.ipa();
    });

program.parse(process.argv);