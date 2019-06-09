const https = require('https')

const hitEndPoint = (substr, pageNumber) => {
    const apiUrl = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`
    const requestedUrl = pageNumber ? `${apiUrl}&page=${pageNumber}`: apiUrl

    return new Promise((resolve, reject) => {
        https.get(requestedUrl, (res) => {
            res.setEncoding('utf-8')
            res.on('data', d => {
                try {
                    requestData = JSON.parse(d)
                    resolve(requestData)
                } catch (error) {
                    reject(error)
                }
    
            })
        })
    })
}

const getPageNum = async (substr) => {
    const apiResponse = await hitEndPoint(substr)
    return apiResponse.total_pages
}

const addTitlesPerPage = async (substr, pageNumber) => {
    const pageData = await hitEndPoint(substr, pageNumber)
    return pageData.data.map(movie => {
        return movie.Title
    });
}

async function getMovieTitles(substr) {
    let titles = []
    const pageNumber = await getPageNum(substr)

    for (let page = 1; page <= pageNumber; page++) {
        const titlesForPage = await addTitlesPerPage(substr, page)
        titles.push(...titlesForPage)
    }

    return titles.sort()
}

getMovieTitles('spiderman').then(solution => console.log(solution))