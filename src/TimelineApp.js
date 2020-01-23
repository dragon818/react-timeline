import React, { useState } from 'react';
import './App.css';
import Header from './Header.js'
import Statusform from './Statusform.js'
import Timeline from './Timeline.js'

function TimelineApp () {
  let [user, setuser] = useState(
    [
      // {
      //   "userId" : 1,
      //   "username": 'Dragon',
      //   "avatar": 'image'
      // },

      // {
      //   "userId" : 2,
      //   "username": 'Jess',
      //   "avatar": 'Jess'
      // },
      // {
      //   "userId" : 3,
      //   "username": 'jhon',
      //   "avatar": 'jhon'
      // }
    ]
  );

  let [posts, setpost] = useState(
    [
      // {
      //   "id" : 1,
      //   "userId" : 1,
      //   "message" : 'who are you',
      //   "postheader": 'Today',//time
      // },
      // {
      //   "id" : 2,
      //   "userId" : 2,
      //   "message" : 'who are you i am 2',
      //   "postheader" : 'Tommory',//time
      // },
      // {
      //   "id" : 3,
      //   "userId" : 3,
      //   "message" : 'who are you i am 3',
      //   "postheader": 'Tonight',//time
      // },
      // {
      //   "id" : 4,
      //   "userId" : 1,
      //   "message" : 'who are you i am 3',
      //   "postheader": 'Tonight',//time
      // },
      // {
      //   "id" : 5,
      //   "userId" : 3,
      //   "message" : 'who are you i am 5',
      //   "postheader": 'Tonight 9',//time
      // },
      // {
      //   "id" : 6,
      //   "userId" : 3,
      //   "message" : 'who are you i am 5',
      //   "postheader": 'Tonight 9',//time
      // },
      // {
      //   "id" : 7,
      //   "userId" : 1,
      //   "message" : 'i love html i am 5',
      //   "postheader": 'Tonight 9',//time
      // },
      // {
      //   "id" : 8,
      //   "userId ": 3,
      //   "message" : 'i love c# i am 5',
      //   "postheader": 'Tonight 9',//time
      // },
      // {
      //   "id" : 9,
      //   "userId" : 3,
      //   "message" : 'i love js  i am 5',
      //   "postheader": 'Tonight 9',//time
      // },
      // {
      //   "id" : 10,
      //   "userId" : 3,
      //   "message" : 'i love json i am 5',
      //   "postheader": 'Tonight 9',//time
      // }

      // {
      //   user : {
      //     username : 'Jess',
      //     avatar: 'http://placekitten.com/100/101'
 
      //   },
      //   message : 'hahahh',
      //   postheader: 'Testoday'
      //  },
    ]
  );

  const createPost = (message) => {

    const time = new Date().toLocaleTimeString();
    const newPost = {

      user : {
        username : 'Jess',
        avatar: 'http://placekitten.com/99/100'
      },
      message : message,
      postheader : time
      
    }
    setpost([newPost, ...posts])
  }

  return (
    <div className = 'main'>
      <Header />
      <Statusform createPost = {createPost} post = {posts}/>
      <Timeline posts = {posts}/>
    </div>

  )

}

export default TimelineApp;
