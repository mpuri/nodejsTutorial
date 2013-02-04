/*
 * nodejsTutorial
 * https://github.com/condenast
 *
 * Copyright (c) 2013 Condé Nast. All rights reserved.
 */

'use strict';

var express = require('express'),
    app = express(),
    mongoose = require('mongoose');

require('../config')(app);
require('../routes')(app);

mongoose.connect(app.get('db'));
app.listen(app.get('port'));
