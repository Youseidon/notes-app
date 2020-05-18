const fs = require('fs');
const chalk = require('chalk')

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(n => n.title === title);
    if (note) {
        console.log('Title: ', chalk.inverse.green(note.title))
        console.log('Body: ', chalk.inverse.green(note.body))
    } else {
        console.log(chalk.inverse.red('No note found'))
    }
    return note;
}
const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.bold.yellow('Your Notes: '));
    notes.map(p => {
        console.log(chalk.blue(p.title));
    })
    return notes;
}
const removeNote = (title) => {
    const notes = loadNotes();
    const notesNew = notes.filter(n => n.title !== title);
    if (notes.length === notesNew.length)
        console.log(chalk.red.inverse("No note has found"));
    else {
        saveNotes(notesNew);
        console.log(chalk.red.inverse('Note', title, 'has been deleted'));
    }
}

const addNote = (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter(n => n.title === title);
    const duplicatenote = notes.find(n => n.title === title);
    if (!duplicatenote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse("New Note added"));
    } else {
        console.log(chalk.yellow.inverse('Note title taken'));
    }
}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

module.exports = {
    // getNoteds: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};