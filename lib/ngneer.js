var fs = require('fs.extra');
exports.ngneer = {
    ipa: function(){
        var src = './templates/ipa/index.html',
            dest = process.cwd() + '/index.html';            
        fs.copy(src, dest, console.log);
    }
};