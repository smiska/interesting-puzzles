process.env.UV_THREADPOOL_SIZE = 1 // how was this?
const app = require('express')()
const cluster = require('cluster')
const crypto = require('crypto')

if (cluster.isMaster) {
  cluster.fork()
  cluster.fork()
  // cluster.fork()
  // cluster.fork()
  // cluster.fork()
} else {

  const doWork = (duration) => {
    const start = Date.now()
    while (Date.now() - start < duration) {
      debugger
    }
  }

  app.get('/', (req, res) => {
    doWork(5000)
    res.send('hello world')
  })

  app.get('/metrics', (req, res) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
      res.send('this was fast')
    })
  })


  app.get('/fast', (req, res) => {
    res.send('this was fast')
  })

  app.listen(3000)
}