

import './AddUser.css';
import axios from "axios";
import { useState } from 'react';
import AddUserToDb from '../../UserServices/AddUser/AddUserToDb';

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
        
        <form onSubmit={onSubmithandler}>
        <label>
            Name:
            <input type="text" name="name" onChange={(e)=>setTitle(e.target.value)} />
        </label>
        <label>
            age:
            <input type="number" name="age" onChange={(e)=>setAge(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
        </form>

     
    </div>
  );
}

export default AddUser;
