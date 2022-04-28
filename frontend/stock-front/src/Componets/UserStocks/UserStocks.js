import './UserStocks.css';
import axios from 'axios'
import { useState ,useEffect} from 'react';
import { useLocation } from 'react-router-dom';

function UserStocks(props) {
  const [sname,Changesname]=useState('AAPL')
  function listChnageHandler(e){
    Changesname(e.target.value)
  }

function onSubmithandler(e){
  axios({
    method: 'POST',
    url: 'http://127.0.0.1:5000/addstock',
    data: {
      id: id,
      symbol: sname
    },
    headers: {'Content-Type': 'application/json'}
  })
  e.preventDefault()
}

 /** useEffect(()=>{
    axios.get('http://127.0.0.1:5000/stock/all/')
    .then((response)=>{setUser(response.data)})
    
}, [])
console.log(users)**/

const location = useLocation();
const id = location.state;
console.log(id)
    
    


  return (
    <div >
      <form onSubmit={onSubmithandler} className='form-group'>
      <label htmlFor="stock-names"><h1>Add more stocks:</h1></label>
      <select onChange={listChnageHandler} className='form-select  mb-3' name="stock-names" id="stock-names">
      <option value="AAPL">Apple Inc</option>
      <option value="AAT">American Assets Trust, Inc</option>
      <option value="TCS">Tata Consultancy Services</option>
      <option value="MSFT">Microsoft Corporation</option>
      <option value="GOOG">Alphabet Inc Class A</option>
      <option value="JPM">JPMorgan Chase and Co</option>
      <option value="SPX">S and P 500</option>
      </select>
      <button type='submit' className='btn btn-outline-warning'>add stock</button>
      </form>

     
    </div>
  );
}

export default UserStocks;