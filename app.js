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
    handler: function(parameter) {
        console.log('Title: ', parameter.title);
        console.log('Body: ', parameter.body);
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

yargs.parse();
// console.log(yargs.argv);