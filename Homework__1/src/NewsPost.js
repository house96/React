import React from 'react'
import './NewsPost.css'

export default function NewsPost(props) {
  const { postList } = props
  const post = postList.map(post => {
    return (
      <li key={post ? post : Math.random()} className="news-post">
        {post}
      </li>
    )
  })
  return <ul className="comment-input">{post}</ul>
}
