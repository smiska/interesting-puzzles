const fs = require('fs')
const util = require('util')

const readFile = util.promisify(fs.readFile)

// fs.readFile('./hw.txt', 'utf8', (err, txt) => {
//     if (err) return console.error(err)
//     console.log(txt)
// })


readFile('./hw.txt', 'utf8').then(d => console.log(d)).catch(e => console.error(e))