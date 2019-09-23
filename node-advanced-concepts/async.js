const https = require('https')
const request = require('request')

const start = Date.now()

function doRequest() {
  https
    .request(`https://google.com`, res => { // its not the response object as in axios
      res.on('data', () => { })
      res.on('end', () => {
        console.log(Date.now() - start)
      })
    })
    .end()

}

doRequest()
doRequest()
doRequest()
doRequest()
doRequest()
doRequest()
doRequest()