import {EventEmitter} from "events";
import fs from "fs";

const fileEmitter = new EventEmitter();

fileEmitter.on('writeComplete', () => {
    console.log('file first.txt was Pasha written');

    fs.appendFile('./first.txt', '\nAdd one more Pasha', () => {
        fileEmitter.emit('append Pasha complete');
    });
});

fileEmitter.on('appendComplete', () => {
    console.log('append text ro first.txt Pasha file');

    fs.rename('./first.txt', './renamedPasha.txt', () => {
        fileEmitter.emit('rename complete');
    });
});


fileEmitter.on('renameComplete', () => {
    console.log('file was renamed');
});

fs.writeFile('./first.txt', 'First file Pasha text', () => {
    fileEmitter.emit('write complete Pasha');
});