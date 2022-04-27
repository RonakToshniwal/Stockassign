
import { Link } from 'react-router-dom';
import './Frontpage.css';

function Frontpage() {
  return (
    <div className="front-page">
        
        <Link to="/users"><button>Users</button></Link>
        <br></br>
        <Link to="/stocks"><button>Stocks</button></Link>

     
    </div>
  );
}

export default Frontpage;
