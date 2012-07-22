'use strict';

var fs = require('fs.extra');
var exec = require('child_process').exec;

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
    },
    seed: function (name) {
        name = name || 'angular-seed';
        var gitClone = "git clone git://github.com/angular/angular-seed.git " + name;
        var removeGit = "rm -rf " + name + '/.git';
                
        exec(gitClone, function (error) {
            if (!error) {
                exec(removeGit, function (error) {
                    if (!error) {
                        console.log('Enjoy you new AngularJS seed project!');
                        console.log('\t', name);
                    } else {
                        console.log('ERROR', error);
                    }
                });
            }
            else {
                console.log('ERROR', error);
            }
        });
    }
};