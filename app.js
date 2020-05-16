const validator = require("validator");
const chalk = require("chalk");
const getNotes = require("./notes");
const yargs = require('yargs');

// console.log(process.argv);
//Customize yargs version
yargs.version('12.0.1');
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a new note');
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log("Removing a note");
    }
});

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: function(arg) {
        console.log("Reading a note", arg._[1]);
    }
});

yargs.command({
    command: 'list',
    describe: 'Listing a note',
    handler: function() {
        console.log("Listing out all notes");
    }
});

console.log(yargs.argv);