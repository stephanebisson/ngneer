#!/usr/bin/env node
xcZXcZXczx
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

program
    .command('seed [name]')
    .description('Get started with the official AngularJS seed project for free!')
    .action(function (name) {
        ngneer.seed(name);
    });


program.parse(process.argv);