const axios = require('axios')

const urlTpl = 'https://jsonplaceholder.typicode.com/todos/'
const urls = [`${urlTpl}1`, `${urlTpl}2`, `${urlTpl}3`]

async function getFetchResponseSize(urls) {
  for (const url of urls) {
    try {
      const res = await axios.get(url)
      console.log(JSON.stringify(res.data))
    } catch (err) {
      console.log(err)
    }
  }
}

getFetchResponseSize(urls)