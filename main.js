const fs = require('fs')


fs.writeFile('./first.txt', 'First file Pasha', (err) => {
    if (err) console.log(err)
    else {
        console.log('File was written Pasha')
        fs.appendFile('./first.txt', '\nOne more line', (err) => {
            if (err) console.log(err)
            else {
                console.log('Pasha good')
                fs.rename('./first.txt', './renameFirst.txt', (err) => {
                    if (err) console.log(err)
                    else console.log('rename')
                })
            }
        })
    }
})

