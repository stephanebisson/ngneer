var fs = require('fs.extra');
exports.ngneer = {
    copySinglePageApp: function(flavour){
        var src = './templates/' + flavour + '/index.html',
            dest = process.cwd() + '/index.html';            
        fs.copy(src, dest, console.log);
    },
    vanilla: function(){
        this.copySinglePageApp('vanilla');
    },
    ipa: function(){
        this.copySinglePageApp('ipa');
    }
};