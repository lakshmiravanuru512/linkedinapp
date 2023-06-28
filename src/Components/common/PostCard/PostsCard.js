import React from 'react'

export const PostsCard = ({post}) => {
  return (
    <div className='post-card'>
      <p className='timestamp'>{post.timestamp}</p>
      <p className='status'>{post.status}</p>
      </div>
  )
}
