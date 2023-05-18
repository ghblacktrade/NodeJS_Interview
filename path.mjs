const path = require('path');

const filePath = '/Users/gh/Desktop/node/path.mjs';
const textFilePath = '/Users/gh/Desktop/file/txt';
const relativePath = './node/movie.mov';
const directoryPath = './node/subfolder';

console.log(path.isAbsolute(filePath));
console.log(path.isAbsolute(relativePath));

console.log(path.basename(filePath));

console.log(path.resolve(relativePath));

console.log(path.extname(textFilePath))