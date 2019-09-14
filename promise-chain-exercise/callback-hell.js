const request = require('request')

const getUser = (id, cb) => {
    request.get(`https://jsonplaceholder.typicode.com/users/${id}`, (err, res) => {
        if(err) {
            cb(err)
        } else {
            if (res.statusCode = 200) {
                let user = JSON.parse(res.body)
                cb(null, user)
            } else {
                cb('Invalid status code')
            }
        }

    })
}

const getUserPosts = (id, cb) => {
    request.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`, (err, res) => {
        if(err) {
            cb(err)
        } else {
            if (res.statusCode = 200) {
                let posts = JSON.parse(res.body)
                cb(null, posts)
            } else {
                cb('Invalid status code')
            }
        }

    })
}

const getUserWithPosts = (id, cb) => {
    getUser(id, (err, user) => {
        if (err) {
            cb(err)
        } else {
            getUserPosts(id, (err, posts) => {
                if (err) {
                    cb(err)
                } else {
                    user.posts = posts
                    cb(null, user)
                }
            })
        }
    })
}

getUserWithPosts("1", (err, uwp) => {
    if (err) {
        console.error(err)
    } else {
        console.log(uwp)
    }
})