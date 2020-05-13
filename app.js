const validator = require("validator");
const chalk = require("chalk");
const getNotes = require("./notes");

const msg = getNotes();
console.log(msg);
console.log(chalk.red(validator.isURL("gmail/.com")))
const log = console.log;
log(chalk.green.bold.inverse('Success') + ' Message ' + chalk.inverse.red("Error!"));