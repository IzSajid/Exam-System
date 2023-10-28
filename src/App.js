import { Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './Authentication/Login';
import Signup from './Authentication/Signup';
import Home from './Home/Home';
import Header from './Header-Footer/Header';
import Banner from './Home/Banner/Banner';
import Footer from './Header-Footer/Footer/Footer';
import Forgetpass from './Authentication/Forgetpass';
import Createclass from './Classes/Createclass';
import Showclass from './Classes/Showclass';
import ShowClasses from './Classes/ShowClasses';
import Menu from './Cohorts/Menu';
import Students from './Cohorts/Students';
import Dashboard from './Cohorts/Dashboard';


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
    <Route path='/forgetpass' element={<Forgetpass></Forgetpass>}></Route>
    <Route path='/createclass' element={<Createclass></Createclass>}></Route>
    <Route path='/showclass' element={<Showclass></Showclass>}></Route>
    <Route path='/showclasses' element={<ShowClasses></ShowClasses>}></Route>
    <Route path='/menu' element={<Menu></Menu>}></Route>
    <Route path='/students' element={<Students></Students>}></Route>
    <Route path="/dashboard" element={<Dashboard></Dashboard>} />
   </Routes>
   <Footer></Footer>

    </div>
  );
}

export default App;
