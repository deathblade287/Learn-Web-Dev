const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
    if (err) {
        console.log('Error!');
    }
    console.log('1.', data.toString()); //Read file function returns in "buffer" format |  by default toString uses an encoding called "utf8"
});

// This makes the readFile function synchronus which by default is async (hence the callback function in the end)
const file = fs.readFileSync('./hello.txt').toString();
console.log('2.', file);

// If the file name provided doesn't exist, the module will create a new file
// fs.appendFile('./hello.txt', '\nTest...', err => {
//     if (err) {
//         console.error(err);
//     }
// })

fs.writeFile('./bye.txt', 'Test Again', err => console.log(err))

fs.unlink('./bye.txt', err => console.log(err))