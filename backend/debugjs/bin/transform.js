#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var transform = require('../lib/transform.js');
var recast = require('recast');
var regenerator = require('regenerator');

var program = require('commander');

program
  .option('-x, --exclude-steps', 'exclude generating yield statements for debugging')
  .parse(process.argv);

var file = process.argv[process.argv.length - 1];
var source = fs.readFileSync(file).toString();
var filename = path.basename(file);

var transformedCode = recast.print(
  transform(recast.parse(source), {
    filename: filename,
    excludeSteps: program.excludeSteps
  })
).code;

process.stdout.write(regenerator(transformedCode));
