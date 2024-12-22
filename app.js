//*packages/functions
//require('validator') //it’s not assigned to any variable, so you can’t access it later.
const validator = require('validator') //npm validator, syntax change -> no ./, validator is an object
//import validator from 'validator'; //replacement for above, why doesn't it work?
const chalk = require('chalk') //npm chalk 2.4.1, $npm install chalk@2.4.1
const yargs = require('yargs')
const getNotes = require('./notes.js')
const { argv, title } = require('process')
//console.log(getNotes) //op:[Function: getNotes] = why?,

//console.log(process.argv)//doesn't parse cmdline strings
yargs.version('1.1.0') //why?

//need add, remove, read and list

//creating add command
yargs.command({ //why?, check how the funciton is used -> ({})
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true 
        }
    },
    handler: function (argv) {
        console.log('Adding a new note!', argv)
    }
})

//create remove cmd
yargs.command({ //why?, check how the funciton is used -> ({})
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note..')
    }
})

//create list cmd
yargs.command({ //why?, check how the funciton is used -> ({})
    command: 'list',
    describe: 'List notes',
    handler: function () {
        console.log('Listing note..')
    }
})

//create read cmd
yargs.command({ //why?, check how the funciton is used -> ({})
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading the note..')
    }
})

console.log(yargs.argv) //why?

/*
const command = process.argv[2]
console.log(process.argv) //something with cmd-line string parsing not handled, use npm package yargs 
if(command === 'add'){
    console.log('Adding note!')
} else if(command === 'remove'){
    console.log('Removing note..')
} else {
    console.log('input not recognized')
} 
*/

/*
//console.log(chalk.red('Success')) //better practice below
const redMsg = chalk.blue.inverse.bold('Success')
console.log(redMsg)

//console.log(process.argv)//why the output? bcos it treating $node app.js as an array
console.log(process.argv[2])//SR is in array 3rd array box. what's in 0?
*/

/*
console.log(validator.isEmail('roy@email.com')) //expected op: true, isEmail is npm Method, check npmjs.com/validator for methods
//console.log(validator.isEmail('roy@email')) //exp op: false
//console.log(validator.isURL('www.npmjs.com')) //true

const myMsg = getNotes() 
console.log(myMsg)
*/

/*
const add = require('./utils.js') //loading add function
const sum = add(2,98) //using add func from utils
console.log(sum)
*/

/*
// require('./utils.js')
const name = require('./utils.js') //loading from utils, name can be any var (try firstName)
// const name = 'SR'
console.log(name)
*/

/*
const fs = require('fs') //why? reference err without
//fs.writeFileSync('notes.txt', 'contents of notes.txt by NodeJS')
fs.writeFileSync('notes.txt', 'Updated contents')
fs.appendFileSync('notes.txt', ' appended data')
*/