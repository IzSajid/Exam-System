import { Sidebar } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { useParams } from 'react-router-dom';
import useClassById from '../Hooks/useClassById';


const Menu = () => {
  const {id}=useParams();
  // const [user]=useClassById(id);
   const user=useClassById(id);

  console.log(user.name);
  
  
    return (
        <Sidebar className='bg-black'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="#"
            icon={HiChartPie}
          >
            <p>
             Dashboard
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/design"
            icon={HiViewBoards}
            label="Pro"
            labelColor="dark"
          >
            <p>
              Question
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiInbox}
            label="3"
          >
            <p>
              Inbox
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