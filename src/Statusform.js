import React, { useState } from 'react';

function Statusform (props) {
  
  const [value, setvalue] = useState('');

  

  const submit = () => {
    props.createPost(value);
    setvalue('');
  }

  

  return (
    <div className = 'status'>
      <h3>Add New Status</h3>
      <form>
        <input className = 'postmessage' name = "message" value = {value} onChange = {e => {setvalue(e.target.value)}} placeholder = "Message gose here" type = "text"/>
        <div className = "buttonbox"> 
          <input className = 'postbutton' type = "button" value= "post" onClick = {submit}/>
        </div>
      </form>
    </div>
  )

}

export default Statusform;
