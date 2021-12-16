import React from "react"

import Post from "src/components/PostsSection/components/Post"
import { Title } from "src/uikit"

import * as S from "./styled"

const RelatedPosts = ({ posts, title }) => {
  return (
    <S.Container>
      {posts.length > 0 && (
        <>
          <Title>{title || "Related Posts"}</Title>
          <ul className="posts-list">
            {posts.map(post => (
              <li className="posts-list-item" key={post.blogPostId}>
                <Post {...post} />
              </li>
            ))}
          </ul>
        </>
      )}
    </S.Container>
  )
}

export default RelatedPosts
