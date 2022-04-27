
import './Stocks.css';
import axios from 'axios'
import { useState ,useEffect} from 'react';

function Stocks() {
var [users,setUser] = useState({})

  useEffect(()=>{
    axios.get('http://127.0.0.1:5000/stock/all/')
    .then((response)=>{setUser(response.data)})
    
}, [])
console.log(users)

    
    

if (Object.keys(users).length==0){
    return (<div>Waiting for update</div>)
  }

else



  return (
    <div className="stock-table">
      <table>
            <tr>
                <th>Stock Name</th>
                <th>Last Traded Price</th>
            </tr>
        { Object.keys(users).map(function(key, index) {
          return(
  

       
        
            <tr>
                <td>{key}</td>
                <td>{users[key]}</td>
            </tr>
           
        
          )
        })
        
}
</table>

     
    </div>
  );
}

export default Stocks;
