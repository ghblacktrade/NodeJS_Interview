import {EventEmitter} from "events";
import fs from 'fs'

const fileEmitter = new EventEmitter()


fileEmitter.on('write Pasha complete', () => {
    console.log('end')
    fs.appendFile('./first.txt', '\nOne more line', () => {
        fileEmitter.emit('appendComplete')
    })
} )


fileEmitter.on('appendComplete')