import axios from 'axios'

export const getPosts = async (page) => {
    console.log(page)
    try {
        const posts = await axios.get(`https://gorest.co.in/public-api/posts?page=${page}`)
        return posts
    } catch (error) {
        return error
    }
}