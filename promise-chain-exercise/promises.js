const axios = require('axios')
const fs = require('fs')
const util = require('util')

// EXAMPLE 1

const getUser = (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(resp => resp.data)
}

const getPosts = (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then(resp => resp.data)
}

const getUserWithPosts = (id) => {
    let currUser
    return getUser(id).then(user => {
        currUser = user
        return getPosts(id)
    }).then(posts => {
        currUser.posts = posts
        return currUser
    })
}

getUserWithPosts('1').then(x => console.log(x)).catch(e => console.error(e))


// EXAMPLE 2

const readFile = util.promisify(fs.readFile)

// fs.readFile('./hw.txt', 'utf8', (err, txt) => {
//     if (err) return console.error(err)
//     console.log(txt)
// })


readFile('./hw.txt', 'utf8').then(d => console.log(d)).catch(e => console.error(e))