const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
//const os = require('os');

const notes = require('./notes.js');

// var res = notes.addNote();
// console.log(res);

// var sum = notes.add(2,3);
// console.log(sum);

//var user = os.userInfo();

// fs.appendFile('greetings.txt',`Hello ${user.username}! You are ${notes.age}.`, function(err) {
//     if(err) {
//         console.log('unable to write to file');
//     }
// });

//console.log(_.isString(true));
//console.log(_.isString('Kumar'));

//var filtered_array = _.uniq(['kumar', 1, 'kumar', 1, 2,3,4]);
//console.log(filtered_array);

//==================================

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

const argv = yargs.command('add', 'Add a new note.', {
    title : titleOptions,
    body : bodyOptions
})
.command('list', 'List all notes')
.command('read','Read a note',{
    title : titleOptions
})
.command('remove','Remove a note', {
    title: titleOptions
})
.help()
.argv;

//var command = process.argv[2];
var command = argv._[0];
//console.log(`command : ${command}`);

if(command == 'add') {
    var note = notes.addNote(argv.title,argv.body);
    if(note) {
        notes.logNote(note);
    } else {
        console.log('note title taken');
    }
} else if(command == 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => {
        notes.logNote(note);
    });
} else if (command == 'read'){
    var note = notes.getNote(argv.title);
    if(note) {
        notes.logNote(note);
    } else {
        console.log('note not found!');
    }
} else if (command == 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'note was removed!' : 'note not present!';
    console.log(message);
} else {
    console.log('command not recognized');
}