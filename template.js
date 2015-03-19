/*
 * grunt-init-composer-file
 * https://github.com/fmccoy/grunt-init-composer-file
 *
 * Copyright (c) 2015 Frank McCoy,
 * Licensed under the MIT license.
 */

'use strict';

exports.description = 'Generate "composer.json".';

exports.notes = '____';

exports.warnOn = 'composer.json';

exports.template = function(grunt, init, done) {

  init.process({}, [
    // Use env vars instead of prompts
  ], function(err, props) {

    // Libs
    var path = require('path');

    // Get CWD slug
    var folder = path.basename(process.cwd());
        folder = folder.replace(/[^\w\-\.]/g, '');

    // Use env vars instead of prompts
    var wdcom = {};
        wdcom.package = folder;
        wdcom.vendor = process.env.WDCOM_VENDOR;
        wdcom.author = process.env.WDCOM_AUTHOR;
        wdcom.authorEmail = process.env.WDCOM_AUTHOREMAIL;

    var files = init.filesToCopy(props);

    init.copyAndProcess(files, wdcom);

    done();
  });
};
