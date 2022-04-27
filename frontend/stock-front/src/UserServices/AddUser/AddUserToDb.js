import axios from "axios";
function AddUserToDb(name,age)
{
    console.log("YES")
    axios({
        method: 'post',
        url: 'http://127.0.0.1:5000/user/new/',
        data: {
          name: name,
          age: age
        }
      })
    
    
}
export default AddUserToDb;


