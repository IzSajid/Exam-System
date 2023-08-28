import { Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './Authentication/Login';
import Signup from './Authentication/Signup';
import Home from './Home/Home';
import Header from './Header-Footer/Header';
import Banner from './Home/Banner/Banner';
import Footer from './Header-Footer/Footer/Footer';

function App() {
  return (
    <div>
       <Header></Header>
   <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/home' element={<Home></Home>}></Route>
    <Route path='/signup' element={<Signup></Signup>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/banner' element={<Banner></Banner>}></Route>
    <Route></Route>
   </Routes>
   <Footer></Footer>

    </div>
  );
}

export default App;
