const getNotes = require("./notes");
const validator = require("validator");
const msg = getNotes();

console.log(msg);
const email = "test@example.com";
console.log(validator.isEmail(email));