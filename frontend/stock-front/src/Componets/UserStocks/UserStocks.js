import './UserStocks.css';
import axios from 'axios'
import { useState ,useEffect} from 'react';
import { useLocation } from 'react-router-dom';

function UserStocks(props) {

 /** useEffect(()=>{
    axios.get('http://127.0.0.1:5000/stock/all/')
    .then((response)=>{setUser(response.data)})
    
}, [])
console.log(users)**/

const location = useLocation();
const data = location.state;
console.log(data)
    
    


  return (
    <div className="stock-table">
      Hello

     
    </div>
  );
}

export default UserStocks;