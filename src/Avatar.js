import React, { useState } from 'react';

function Avatar (props) {
  console.log(props.image);

  return (
    <img src = {props.image} alt = "kitty"/>
  )

}

export default Avatar;
