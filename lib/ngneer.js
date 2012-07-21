var empty = function(array){
    return !array || array.length === 0;
};

exports.App = function(args){
    this.args = args;
};

exports.App.prototype = {
    run: function(){
        if (empty(this.args)) {
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