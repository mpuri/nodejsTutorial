/*
 * nodejsTutorial
 * https://github.com/condenast/nodejsTutorial
 *
 * Copyright (c) 2013 Condé Nast. All rights reserved.
 */

'use strict';

var express = require('express');

exports = module.exports = function(app) {
  app.set('db', 'mongodb://localhost/production');
  app.set('port', process.env.PORT || 3000);
  app.use(express.favicon());
  app.use(express.logger());
  app.use(app.router);

  app.configure('development', function() {
    app.set('db', 'mongodb://localhost/development');
    app.use(express.errorHandler());
  });
};
