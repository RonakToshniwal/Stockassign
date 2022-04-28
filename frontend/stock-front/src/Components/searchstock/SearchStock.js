
import './SearchStock.css';
import {useState} from 'react'
import axios from 'axios'

function SearchStock() {
  const [sname,Changesname]=useState('AAPL')
  const [data,Changedata] = useState({})
  

  function onSubmithandler(e){
    axios({
      method: 'POST',
      url: 'http://127.0.0.1:5000/addstock',
      data: {
        id: sname
      },
      headers: {'Content-Type': 'application/json'}
    })
    e.preventDefault()
  }
  
  function listChnageHandler(e){
    Changesname(e.target.value)
  }
  console.log(sname)
  return (
    <div className="searchstock-page">
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

export default SearchStock;
