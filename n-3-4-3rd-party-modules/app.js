console.log('Starting App.....');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');

var command = process.argv[2];
console.log('command:' + command);

if (command === 'add') {
    console.log('Adding new note');
}
else if (command === 'list') {
    console.log('Listing all notes');
}
else {
    console.log('command not recognized....');
}