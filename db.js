"use strict";

const
  path      = require('path')
, mongoose  = require('mongoose')
;

const Config = require(path.join(__dirname, "./config/config"));

mongoose.connect("mongodb://" + Config.database.host + ":" + Config.database.port + "/" + Config.database.dbname);
