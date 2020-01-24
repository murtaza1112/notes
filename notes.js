const fs = require('fs')
const chalk = require('chalk')

// const addNotes = function(title,body){
//    const notes = loadNotes()
//    const duplicate = notes.filter((note) => {return note.title===title})

//     console.log(notes)
//    if(duplicate.lenght === 0 )
//    {
// 	notes.push({
// 		title : title,
// 		body : body
// 	})
// 	saveNotes(notes)
// 	console.log(chalk.green("New Note Created"))
//    }else{
// 	   console.log(chalk.red("Sorry,Title taken"))
//    }
   
   
// }

const addNotes = function (title, body) {
    const notes = loadNotes()
	const duplicateNotes = notes.find(note => note.title === title)
	
	console.log(duplicateNotes)
	
    if (!duplicateNotes) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('New note added!'))
    } else {
        console.log(chalk.red('Note title taken!'))
    }
}

const removeNotes = function(title){
	const notes = loadNotes()
	const newnotes = notes.filter(note=>note.title!==title)
	
	const ar= ['not','not']
	console.log(notes.lenght,ar.lenght)
	if(newnotes.lenght===notes.lenght)
	{
		console.log(chalk.red("note dosent exist"))
	}else{
		saveNotes(newnotes)
		console.log(chalk.green("note deleted"))
	}
	


}
const saveNotes = function(notes){
	const notess = JSON.stringify(notes);
	fs.writeFileSync('notes.json',notess)
	
}
const loadNotes = function(){
   try{
	    data = fs.readFileSync('notes.json').toString()
	    return JSON.parse(data)
	   
   }catch(e){
	   return []
   }
}
const listNotes = function(){
	const notes = loadNotes()
	console.log(chalk.white.inverse("Your Notes:-"))
	notes.forEach((note)=>console.log(note.title))

}

const readNotes = function(title){
	const notes = loadNotes()
	const out = notes.find((note)=>note.title===title)

	if(out)
	{
	  console.log(chalk.green("The note has been found,\n"))
	  console.log(out)
	}else{
		console.log(chalk.red("The note does not exist"))
	}
}
module.exports = {
	addNotes : addNotes,
	loadNotes : loadNotes,
	removeNotes : removeNotes,
	listNotes : listNotes,
	readNotes : readNotes
}