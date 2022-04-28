

import './AddUser.css';
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router';

function AddUser() {
  const [title, setTitle] = useState('')
  const [age, setAge] = useState('')
  let navigate = useNavigate();


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
    navigate("/users")
    
  }





  return (
    <div className="form-add">
        
        <form onSubmit={onSubmithandler}>
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
