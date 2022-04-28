
import './App.css';
import Frontpage from './Componets/Frontpage/Frontpage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Stocks from './Componets/Stocks/Stocks';
import Users from './Componets/Users/Users';
import AddUser from './Componets/AddUser/AddUser';
import UserStocks from './Componets/UserStocks/UserStocks';
import SearchStock from './Componets/searchstock/SearchStock';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Frontpage/>}/>
          <Route exact path="/users" element={<Users/>}/>
          <Route exact path="/stocks" element={<Stocks/>}/>
          <Route exact path="/adduser" element={<AddUser/>}/>
          <Route exact path="/userstocks" element={<UserStocks/>}/>
          <Route exact path="/searchstock" element={<SearchStock/>}/>
        </Routes>
      
    </Router>
  )
}

export default App;
