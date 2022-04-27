
import { Link } from 'react-router-dom';
import './Frontpage.css';

function Frontpage() {
  return (
    <div className="front-page">
        
        <Link to="/users"><button className='frbtn1'>Users</button></Link>
        <br></br>
        <Link to="/stocks"><button className='frbtn1'>Stocks</button></Link>

     
    </div>
  );
}

export default Frontpage;
