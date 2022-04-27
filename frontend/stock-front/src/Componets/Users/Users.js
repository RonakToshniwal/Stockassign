
import { Link } from 'react-router-dom';
import './Users.css';

function Users() {
  return (
    <div className="User-page">
      
        <Link to="/adduser"><button>Add User</button></Link>
        <table>
            <tr>
                <th>User</th>
                <th>Show</th>
                <th>delete</th>
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

export default Users;
