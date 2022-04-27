

import './AddUser.css';
import axios from "axios";
import { useState } from 'react';

function AddUser() {
  const [title, setTitle] = useState('')
  const [age, setAge] = useState('')



  function onSubmithandler(e){
    
     axios({
      method: 'POST',
      url: 'http://127.0.0.1:5000/user/new/',
      data: {
        name: title,
        age: age
      },
      headers: {'Content-Type': 'application/json'}
    })
    



    e.preventDefault()
  }





  return (
    <div className="form">
        
        <form className='form-group' onSubmit={onSubmithandler}>
        <label>Name:</label> <br/>
         <input type="text" name="name" onChange={(e)=>setTitle(e.target.value)} /><br/>
        <label>age:</label><br/>
        <input type="number" name="age" onChange={(e)=>setAge(e.target.value)} /><br/>
        
        <input className='sub'  type="submit" value="Submit" />
        </form>

     
    </div>
  );
}

export default AddUser;
