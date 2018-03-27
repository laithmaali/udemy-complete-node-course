console.log('Starting App.....');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');
const yargs = require('yargs');

const argv = yargs.argv;
console.log('yargs.argv:' + JSON.stringify(argv));
var command = process.argv[2];
console.log('command:' + command);

if (command === 'add') {
    notes.addNote(argv.title, argv.body)
}
else if (command === 'list') {
    notes.getAll();
}
else if (command === 'read') {
    notes.getNote(argv.title);
}
else if (command === 'removeNote') {
    notes.removeNote(argv.title);
}
else {
    console.log('command not recognized....');
}