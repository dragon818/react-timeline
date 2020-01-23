import React, { useState } from 'react';
import PostHeader from './PostHeader.js'
import Avatar from './Avatar.js'
import Message from './Message.js'

function Post (props) {

  return (
    <div className = 'message'>
      <Avatar image = {props.post.user.avatar}/>
      <div className = 'info'>
        <PostHeader postheader = {props.post.postheader}/>
        <Message message = {props.post.message}/>
      </div>
    </div>
  )

}

export default Post;
