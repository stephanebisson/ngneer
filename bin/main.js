#!/usr/bin/env node

var args = process.argv.slice(2);

// var ngneer = require('../lib/ngneer.js');
// new ngneer.Ngneer(args).run();

var program = require('commander');

program.version('0.0.0');
    
program
    .command('ipa')
    .description('simplest angularjs single-page app')
    .action(function(){
        console.log('this is ipa');
    });

program.parse(process.argv);