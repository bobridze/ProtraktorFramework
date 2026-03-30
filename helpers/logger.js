'use strict';

var fs   = require('fs');
var path = require('path');

var LOG_DIR  = path.join(__dirname, '..', 'logs');
var LOG_FILE = path.join(LOG_DIR, 'test.log');

// Ensure logs/ directory exists
if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

// Clear log file at the start of each run
fs.writeFileSync(LOG_FILE, '');

// ANSI colour codes for console output
var COLOURS = {
  INFO:  '\x1b[36m',  // cyan
  WARN:  '\x1b[33m',  // yellow
  ERROR: '\x1b[31m',  // red
  DEBUG: '\x1b[90m',  // grey
  RESET: '\x1b[0m'
};

function timestamp() {
  return new Date().toISOString().replace('T', ' ').slice(0, 23);
}

function write(level, message) {
  var line = '[' + timestamp() + '] [' + level + '] ' + message;
  var coloured = COLOURS[level] + line + COLOURS.RESET;

  console.log(coloured);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

var logger = {
  info:  function (msg) { write('INFO',  msg); },
  warn:  function (msg) { write('WARN',  msg); },
  error: function (msg) { write('ERROR', msg); },
  debug: function (msg) { write('DEBUG', msg); }
};

module.exports = logger;
