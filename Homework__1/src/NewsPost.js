import React from 'react'
import './NewPost.css'

export default function NewsPost(props) {
  const { text } = props
  return (
    <div className="news-post">
      <p>{text}</p>
    </div>
  )
}
