'use strict';

var fs = require('fs.extra');
exports.ngneer = {
    copySinglePageApp: function (flavour) {
        var src = process.env.NODE_PATH + '/ngneer/src/templates/' + flavour + '/index.html',
            dest = process.cwd() + '/index.html';
        fs.copy(src, dest);
        console.log('Your', flavour, 'application has been created.');
        console.log('\t', dest);
    },
    vanilla: function () {
        this.copySinglePageApp('vanilla');
    },
    ipa: function () {
        this.copySinglePageApp('ipa');
    }
};