import React from 'react';
import {
    Container,
    PostImage,
    CreatedDate,
    PostTitle,
    PostDesc

} from './styles';

const Post = ({id, user_id, title, body, created_at, updated_at}) => {
    return (
        <Container key={id}>
            <PostImage src="https://picsum.photos/500" alt="" />
            <CreatedDate>{created_at}</CreatedDate>
            <PostTitle>{title}</PostTitle>
            <PostDesc>{body}</PostDesc>
        </Container>
    )
}

export default Post;