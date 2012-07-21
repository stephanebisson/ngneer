#!/usr/bin/env node

var program = require('commander');

program.version('0.0.0');

program
    .command('ipa')
    .description('the simplest angularjs single-page app')
    .action(function(){
        console.log('this is ipa');
    });
    
program.parse(process.argv);    