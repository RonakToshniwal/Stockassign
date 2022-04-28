
import { Link } from 'react-router-dom';
import './Users.css';
import { useState ,useEffect} from 'react';
import axios from 'axios'


function Users() {



var [users,setUser] = useState({})

useEffect(()=>{
  axios.get('http://127.0.0.1:5000/users')
  .then((response)=>{setUser(response.data)})
 
  
}, [])
  var id=1

  if (Object.keys(users).length==0){
    return (<div>Waiting for update</div>)
  }
  else
  console.log(Object.keys(users.users))
  return (
    <div className="User-page">
      
        <Link to="/adduser"><button>Add User</button></Link>
        <table>
            <tr>
                <th>Id</th>
                <th>User Name</th>
                <th>Age</th>
                <th>Show</th>
                <th>Delete</th>
            </tr>
            
           
            


        { Object.keys(users.users).map(function(key, index) {
          return(
  

       
        
            <tr>
                <td>{users.users[key].id}</td>
                <td>{users.users[key].name}</td>
                <td>{users.users[key].age}</td>
                <td><Link to= '/userstocks' state = {users.users[key].id} ><button>Show</button></Link></td>
                <td><button>Delete</button></td>
            </tr>
           
        
          )
        })    
}
          </table>

        
        
     
    </div>
  );
}

export default Users;
