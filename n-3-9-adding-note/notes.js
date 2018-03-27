console.log('Starting notes.js');
const fs = require('fs');
var addNote = (title, body) => {
  var notes = [];
  var note = {
    title, body
  }
  notes.push(note);
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var getAll = () => {
  console.log('Getting All notes');
};

var getNote = (title) => {
  console.log('Getting Note', title)
};

var removeNote = (title) => {
  console.log('Removing Note', title)
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}