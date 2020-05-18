const validator = require("validator");
const chalk = require("chalk");
const notes = require("./notes");
const yargs = require('yargs');

// console.log(process.argv);
//Customize yargs version
yargs.version('12.0.1');
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(parameter) {
        notes.addNote(parameter.title, parameter.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    bundler: {
        title: {
            describe: 'Title to remove note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(p) {
        notes.removeNote(p.title);
    }
});

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'Read by title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(arg) {
        return notes.readNote(arg.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'Listing a note',
    handler() {
        return notes.listNotes();
    }
});

yargs.parse();