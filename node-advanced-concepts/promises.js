const axios = require('axios')

const getUser = (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(resp => resp.data)
}

const getPosts = (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then(resp => resp.data)
}

function getComments(postId) {
    return axios.default.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(response => response.data);
}

function loadPostComments(post) {
    return getComments(post.id).then(comments => {
        post.comments = comments;
        return post;
    });
}

const getUserWithPosts = (id) => {
    let currUser
    return getUser(id).then(user => {
        // console.log(user)
        currUser = user
        return getPosts(id)
    }).then(posts => {
        // console.log(posts)

        // load posts
        return Promise.all(posts.map(post => loadPostComments(post)))
    }).then(postsWithComments => {
        console.log(postsWithComments)

        currUser.posts = postsWithComments
        return currUser
    })
}

getUserWithPosts('1').then(x => {
    console.log(x)
}).catch(e => console.error(e))