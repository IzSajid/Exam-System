import {Routes, Route } from "react-router-dom";
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
import ShowStudents from './Cohorts/ShowStudents';
import Teacher from './Cohorts/Teacher';
import UseClassById from './Hooks/useClassById';
import ClassDetail from './Hooks/ClassDetail';
import Quizz from "./Assestment/Quizz";
import Questions from "./Assestment/Questions";
import Design from "./Assestment/Design";
import Result from "./Assestment/Result";
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
    <Route path='/classes/:id/student' element={<Students></Students>}></Route>
    
     <Route path="/classes/:id" component={UseClassById} element={<Dashboard></Dashboard>} ></Route>
     <Route path='/quizz' element={<Quizz></Quizz>}></Route>
     <Route path='/classes/:id/:formid/question' element={<Questions></Questions>}></Route>
     <Route path='/classes/:id/design' element={<Design></Design>}></Route>
     <Route path='/result' element={<Result></Result>}></Route>
     <Route path="classdetail" element={<ClassDetail></ClassDetail>}></Route>
     
     
    
    
    
    <Route path='/showstudents' element={<ShowStudents></ShowStudents>}></Route>
    <Route path='/teacher' element={<Teacher></Teacher>}></Route>
    <Route path='/hooks' element={<ClassDetail></ClassDetail>}> </Route>
    

   

   </Routes>
   <Footer></Footer>

    </div>
  );
}

export default App;
