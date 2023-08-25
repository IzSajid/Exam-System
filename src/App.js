import { Switch, Route, Routes} from 'react-router-dom';
import './App.css';
import app from './firebase.init';
import Signup from '../src/Authentication/signup';
import Login from './Authentication/Login';

function App() {
  return (
    <div>
   <Routes>
    <Route path='/signup' element={<Signup></Signup>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route></Route>

   </Routes>
    </div>
  );
}

export default App;
