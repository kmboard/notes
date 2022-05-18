const util = require('util')
const fs = require('fs')
const uuid = require('../helpers/uuid')
const path = require("path");

const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);

class Controller {
    read(){
        return readFilePromise(path.join(__dirname, "./db.json"), "utf-8");
    }
    write(note){
        return writeFilePromise(path.join(__dirname, "./db.json"), JSON.stringify(note));
    }
    getNotes(){
        return this.read().then((notes)=>{
            let parsedNotes;
            try{
                parsedNotes = [].concat(JSON.parse(notes))
            } catch (err){
                parsedNotes = []
            }
            return parsedNotes
        })
    }
}


module.exports = new Controller()