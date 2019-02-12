const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data,json');
        return JSON.parse(notesString);
    } catch(e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data,json',JSON.stringify(notes));
};

var addNote = (title, body) => {
    //console.log('Adding note : ', title,body);
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    // var duplicateNotes = notes.filter((note) => {
    //     return note.title === title;
    // });

    var duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note; 
    }
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) =>{
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    if(filteredNotes.length !== 0) {
        return filteredNotes[0];
    }
};

var removeNote = (title) =>{
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    if(notes.length !== filteredNotes.length) {
        saveNotes(filteredNotes);
        return true;
    } else {
        return false;
    }
};

var logNote = (note) => {
    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};