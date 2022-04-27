
import './App.css';
import Frontpage from './Componets/Frontpage/Frontpage';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Stocks from './Componets/Stocks/Stocks';
import Users from './Componets/Users/Users';
import AddUser from './Componets/AddUser/AddUser';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Frontpage/>}/>
          <Route exact path="/users" element={<Users/>}/>
          <Route exact path="/stocks" element={<Stocks/>}/>
          <Route exact path="/adduser" element={<AddUser/>}/>
        </Routes>
      
    </Router>
  )
}

export default App;
