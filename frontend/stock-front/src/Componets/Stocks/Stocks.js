
import './Stocks.css';

function Stocks() {
  return (
    <div className="stock-table">
      
       
        <table>
            <tr>
                <th>Stock Name</th>
                <th>Abbrevation</th>
                <th>Current Traded Price</th>
            </tr>
            <tr>
                <td>Alfreds Futterkiste</td>
                <td><button>Show</button></td>
                <td><button>Delete</button></td>
            </tr>
           
        </table>

     
    </div>
  );
}

export default Stocks;