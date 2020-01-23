import React, { useState } from 'react';
import Post from './Post.js'

function Timeline (props) {

  return (
    <div className = 'container'>
      { props.posts.map((ele , index)=> <Post post = {ele} key = {index}/> ) }
    </ div>
    
  )

}

export default Timeline;
