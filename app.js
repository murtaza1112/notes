//can remove node_modules file which will be again created when 
//npm install cmd is run based on dependencies 
//listed in the package.json

const chalk=require('chalk')
const fs=require('fs')
const yargs=require('yargs')
const notes=require('./notes.js')


yargs.command(
    {
        command: "add",
        describe: "Adding the Note",
        builder:{
            title:{
                describe: "Add the title",
                demandOption: true,
                type: "string"
            },
            body:{
                describe: "Add the body",
                type: "string",
                demandOption: true
            }
        },
        handler:  (argv)=>{notes.addNotes(argv.title,argv.body)}
    }
)

yargs.command({
    command: "remove",
    describe: "Removing the note",
    builder: {
        title:{
            demandOption:true,
            type: "string",
            describe: "remove a note"
        }
    },
    handler: (argv)=>{notes.removeNotes(argv.title)}
})

yargs.command(
    {
        command: "list",
        describe: "listing the Note Titles",
        handler:  ()=>{notes.listNotes()}
    }
)

yargs.command({
    command: "read",
    describe: "Reading the notes",
    builder: {
        title:{
             describe: "find using the title",
             demandOption: true,
             type: "string"
        }
    },
    handler: (argv)=>{notes.readNotes(argv.title)}
})

yargs.parse()