const fs = require('fs/promises')



fs.writeFile('./first.txt', 'First file text')
    .then(() => console.log('File was written Pasha'))
    .then(() =>  fs.appendFile('./first.txt', '\nOne more line'))
    .then(() => console.log('Pasha good'))
    .then(() => fs.rename('./first.txt', './renameFirst.txt'))
    .then(() => console.log('rename'))
    .catch((err) => console.log(err))


// fs.writeFile('./first.txt', 'First file Pasha', (err) => {
//     if (err) console.log(err)
//     else {
//         console.log('File was written Pasha')
//         fs.appendFile('./first.txt', '\nOne more line', (err) => {
//             if (err) console.log(err)
//             else {
//                 console.log('Pasha good')
//                 fs.rename('./first.txt', './renameFirst.txt', (err) => {
//                     if (err) console.log(err)
//                     else console.log('rename')
//                 })
//             }
//         })
//     }
// })

