const fs = require('fs');
const fs = require('fs/promises')


fs.writeFile('./first.txt', 'first file text',)
    .then(() => console.log('Pasha done'))
    .then(() => fs.appendFile('./first.txt', 'etc'))

fs.writeFile('./first.txt', 'Pasha text', (err) => {
    if (err) console.log(err);
    else {
        console.log('File was Pasha is done');
        fs.appendFile('./first.txt', '\nOne more', (err) => {
            if (err) console.log(err);
            else {
                console.log('add line');
                fs.rename('./first.txt', './renamedFirst.txt', (err) => {
                    if (err) console.log(err);
                    else {
                        console.log('file renamed')
                    };
                });
            }
        });


    }
});



