// var obj = {
//     name : 'kumar'
// };

// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name" : "kumar", "age" : 25}';
// var person = JSON.parse(personString);

const fs = require('fs');

var originalNote = {
    title : 'title',
    body : 'body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(note.title);
console.log(note.body);