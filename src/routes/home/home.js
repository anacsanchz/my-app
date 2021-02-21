import React, { useEffect, useState } from 'react';
import Post from '../../components/post/post';
import NewPost from '../../components/new-post/new-post';
import { HomeContainer, Posts } from './styles';
import { getPosts } from '../../api/api'
import Header from '../../components/header/header'


const Home = () => {
    const [posts, setPosts] = useState([])
    const [pagination, setPagination] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [firstLoading, setFirstLoading] = useState(true)

    useEffect(() => {
        fetchPosts()
        window.addEventListener("scroll", onScrollBottom);
        return () => {
            window.removeEventListener("scroll", onScrollBottom);
        }
    }, [])


    useEffect(() => {
        if (!firstLoading) fetchMore()
    }, [pagination])

    const fetchPosts = async () => {

        const postsRaw = localStorage.getItem('localPosts')

        const localPosts = JSON.parse(postsRaw) || []

        const response = await getPosts(1)

        setPosts([...localPosts, ...response.data.data])
        setFirstLoading(false)
    }

    const onScrollBottom = async () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !isLoading) {
            setPagination(prev => prev + 1)
        }
    }

    const fetchMore = async () => {
        setIsLoading(true)
        const morePosts = await getPosts(pagination)
        setPosts(prevPosts => [...prevPosts, ...morePosts.data.data])
        setIsLoading(false)
    }
    
    return (
        <HomeContainer>
            <Header />
            <Posts>
                {posts.map(post => <Post {...post} key={post.id} />)}
            </Posts>
            <NewPost />
        </HomeContainer>
    )
}

export default Home;