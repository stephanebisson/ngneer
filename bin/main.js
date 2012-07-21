#!/usr/bin/env node

var program = require('commander');
var ngneer = require('../lib/ngneer.js').ngneer;
var npmConfig = require('../package.json');

program.version(npmConfig.version);

program
    .command('ipa')
    .description('the simplest angularjs single-page app')
    .action(function(){
        ngneer.ipa();
    });
    
program.parse(process.argv);    