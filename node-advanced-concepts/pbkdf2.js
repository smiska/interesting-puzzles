process.env.UV_THREADPOOL_SIZE = 5
const crypto = require('crypto')

const start = Date.now()
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log(`1: ${Date.now() - start}`)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log(`2: ${Date.now() - start}`)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log(`3: ${Date.now() - start}`)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log(`4: ${Date.now() - start}`)
})

// on dual core machine 4 thread needs double time as 2 threads

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log(`5: ${Date.now() - start}`)
})

// the last execution is fast as this thread is processed with
// no concurent thread in place