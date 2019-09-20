const https = require('https')
const crypto = require('crypto')
const fs = require('fs')

const start = Date.now()

function doRequest() {
  https
    .request(`https://google.com`, res => { // its not the response object as in axios
      res.on('data', () => { })
      res.on('end', () => {
        console.log(`request: ${Date.now() - start}`)
      })
    })
    .end()

}

function doHash() {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(`hash: ${Date.now() - start}`)
  })
}

doRequest()

fs.readFile('multiTask', 'utf8', () => {
  console.log(`FS: ${Date.now() - start}`)
})

doHash()
doHash()
doHash()
doHash()
// check why FS finishes right away for me - what changed in node recently...