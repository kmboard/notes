const util = require('util')
const fs = require('fs')
const uuid = require('../helpers/uuid')

const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);

class Controller {
    read(){
        return readFilePromise('db/db.json', 'utf-8')
    }
    write(note){
        return writeFilePromise('db/db.json', JSON.stringify(note))
    }
    getNotes(){
        return this.read().then((notes)=>{
            let parsedNotes;
            try{
                parsedNotes = [].concat(JSON.parse(notes))
            } catch (err){
                parseNotes = []
            }
            return parsedNotes
        })
    }
}


module.exports = new Controller()