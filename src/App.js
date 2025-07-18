import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Addemployee from './components/Addemployee';
import Viewemployee from './components/Viewemployee';
import Managereq from './components/Managereq';
import Adminlogin from './components/Adminlogin';
import Adminhome from './components/Adminhome';
import Userlogin from './components/Userlogin';
import UserHome from './components/UserHome';
import Status from './components/Status';
import Request from './components/Request';
import Userviewemployee from './components/Userviewemployee';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/al' element={<Adminlogin/>}/>
    <Route path='/ah' element={<Adminhome/>}/>
    <Route path='/a' element={<Addemployee/>}/>
    <Route path='/v' element={<Viewemployee/>}/>
    <Route path='/m' element={<Managereq/>}/>
    <Route path='/ul' element={<Userlogin/>}/>
    <Route path='/uh' element={<UserHome/>}/>
    <Route path='/rl' element={<Request/>}/>
    <Route path='/s' element={<Status/>}/>
    <Route path='/uv' element={<Userviewemployee/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
