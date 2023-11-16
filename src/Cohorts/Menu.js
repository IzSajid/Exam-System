import { Sidebar } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { useParams } from 'react-router-dom';
import useClassById from '../Hooks/useClassById';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';


const Menu = () => {
  const {id,formId}=useParams();
  const [users]=useClassById(id);
  const [user]=useAuthState(auth);
  // if(users.email!=user.email){

  // }
  
  
    return (
        <Sidebar className='bg-black'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="#"
            icon={HiChartPie}
          >
            <p>
           {users.name}
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href={`/classes/${id}/design`}
            icon={HiViewBoards}
            label="Pro"
            labelColor="dark"
          >
            <p>
              Add Questions
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href={`/submitquestion/${id}`}
            icon={HiInbox}
            label="3"
          >
            <p>
              Assestment
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href='/teacher'
            icon={HiShoppingBag}
          >
            <p>
              Teacher
            </p>
          </Sidebar.Item>
          <Sidebar.Item
             href = {`/classes/${id}/student`}
            icon={HiUser}
          >
            <p>
              Student
            </p>
          </Sidebar.Item>
         
          <Sidebar.Item
            href="#signup"
            icon={HiTable}
          >
            <p>
              Sign Up
            </p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    );
};

export default Menu;