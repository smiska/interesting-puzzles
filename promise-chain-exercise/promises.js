const axios = require('axios')

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