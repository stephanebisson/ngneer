var utils = require('./utils.js').utils;

exports.Ngneer = function(args){
    this.args = args;
};

exports.Ngneer.prototype = {
    run: function(){
        if (utils.empty(this.args)) {
            this.help();
        }
        //console.log(this.args);
    },
    help: function(){
        console.log('');
        console.log('Usage: ngneer <command>');
        console.log('');
        console.log('where <command> is one of:');
        console.log('\tipa: create the simplest angularjs single-page app');
    }
};