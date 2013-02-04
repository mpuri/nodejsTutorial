/*
 * nodejsTutorial
 * https://github.com/condenast/nodejsTutorial
 *
 * Copyright (c) 2013 Condé Nast. All rights reserved.
 */

'use strict';

exports = module.exports = function(app) {
  app.get('/', function(req, res) {
    res.send('Hello World!\n');
  });
};
