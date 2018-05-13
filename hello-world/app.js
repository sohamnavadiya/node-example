// console.log("Wel-come...");
// console.log("Starting app.js");

const fs = require('fs');
const os = require('os');
const note = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');

// console.log(_.isString(45));

var user = os.userInfo();

var res = note.addNote();

const argv = yargs.argv

console.log(argv.title);


// var command = process.argv[2]
// console.log(command)

// console.log(res);

// console.log(user);

fs.appendFile('greetings.txt', `Hello ${user.username}! you are ${note.age}`, function (err) {
    if (err){
        console.log("working");
    }
});

// console.log(note.add_(5, 2));