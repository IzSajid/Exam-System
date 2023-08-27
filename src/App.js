import { Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './Authentication/Login';
import Signup from './Authentication/Signup';
import Home from './Home/Home';
import Header from './Header-Footer/Header';

function App() {
  return (
    <div>
       <Header></Header>
   <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/home' element={<Home></Home>}></Route>
    <Route path='/signup' element={<Signup></Signup>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route></Route>

   </Routes>
    </div>
  );
}

export default App;
