import React ,{useState,Fragment,useEffect} from 'react';
import { auth } from './firebase';
import { useHistory,Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react'
import { db } from './firebase';
import NumberFormat from 'react-number-format';
import { FaSmile } from "react-icons/fa";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown({user}) {

  const [anchorEl, setAnchorEl] = useState(null);
  const [account, setAccount] = useState("");

  const history = useHistory();
  
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

useEffect(() => {
    fetchAccount();
  }, [])


  const fetchAccount = async()=>{
    const response = db.collection(`users/V15HmhTXvZMSRGwWsrPWGsBv8zs1/account`);
    const data = await response.get();
    data.docs.forEach(item=>{
      setAccount(item.data())
    })
}

  return (
    
    <Menu as="div" className="relative inline-block text-left z-20">
      <Menu.Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        disableElevation
        onClick={handleClick}
        className='items-center text-center font-bold'
      >
        Account
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 p-2 text-center w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          onClick={history.push("/")}>
          <div className="py-1">
            
             <div className='border-b border-black'>
                <div className='flex flex-row justify-between text-black text-md p-2 font-bold'>
                <span className='pl-3'>
                 {user?.displayName || user?.email}
                </span>
                </div>

            
                <div className='flex flex-row justify-between text-black text-md p-2 space-x-5'>
                <div className='flex flex-col justify-between text-black text-md '>
                 <NumberFormat value={account?.balance} displayType={'text'} thousandSeparator={true} prefix={'$'} className='font-bold'/>
                <span>
                 Portfolio Value 
                </span>
                </div>
                <div className='flex flex-col justify-between text-black text-md'>
                 <NumberFormat value={account?.cash} displayType={'text'} thousandSeparator={true} prefix={'$'} className='font-bold'/>
                <span>
                 Buying Power 
                </span>
                </div>
                </div>
                </div>
            
              <div className='border-b border-black'>

            <Menu.Item>
              {({ active }) => (
                <span
                  className={classNames(
                    active ? 'bg-gray-100 text-yellow-800' : 'text-yellow-800',
                    'block px-4 py-2 text-md cursor-pointer'
                  )}
                >
                  Robinhood Gold
                </span>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <span
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  ' px-4 py-2 text-md cursor-pointer block'
                  )}
                  >
                    {/* <FaSmile/> */}
                  Profile
                </span>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <span
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-md cursor-pointer'
                  )}
                >
                  Rewards
                </span>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <span
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-md cursor-pointer'
                  )}
                >
                  Investing
                </span>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <span
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-md cursor-pointer'
                  )}
                >
                  Transfers
                </span>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <span
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-md cursor-pointer'
                  )}
                >
                  Recurring
                </span>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <span
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-md cursor-pointer'
                  )}
                >
                  Statements
                </span>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <span
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-md cursor-pointer'
                  )}
                >
                  History
                </span>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <span
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-md cursor-pointer'
                  )}
                >
                  Settings
                </span>
              )}
            </Menu.Item>

             <Menu.Item>
              {({ active }) => (
                <span
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-md cursor-pointer w-full'
                  )}
                >
                Help
                </span>
              )}
            </Menu.Item>

            </div>

            {user && (
            <Menu.Item  onClick={() =>{
            auth.signOut();
            history.push("/")}}>
              {({ active }) => (
                <span
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-md cursor-pointer'
                  )}
                >
                  Logout
                </span>
              )}
            </Menu.Item>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
