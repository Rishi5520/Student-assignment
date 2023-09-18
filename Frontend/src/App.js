import Navigationbar from './component/Navigationbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import Profile from './component/Profile';
import ViewAssigment from './component/ViewAssigment';
import Assigment from './component/Assigment';
import ActiveLogin from './component/Account/ActiveLogin';
import Signup from './component/Account/Signup';


function App() {
  return (
    <Router>
      <Navigationbar />
      <Routes>
        <Route path='/' exact element={<Home></Home>} />
        <Route path='/Assigment' element={<Assigment></Assigment>} />
        <Route path='/ViewAssigment' element={<ViewAssigment></ViewAssigment>} />
        <Route path='/Signup' element={<Signup></Signup>} />
        <Route path='/ActiveLogin' element={<ActiveLogin></ActiveLogin>} />
        <Route path='/Profile' element={<Profile></Profile>} />
      </Routes>
    </Router>
  );
}


export default App;
