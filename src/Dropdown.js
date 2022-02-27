import React ,{useState,Fragment,useEffect} from 'react';
import { auth } from './firebase';
import { useHistory,Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react'
import { db } from './firebase';
import NumberFormat from 'react-number-format';

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
        {user?.displayName || user?.email}
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
        <Menu.Items className="absolute right-0 mt-2 text-center w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          onClick={history.push("/")}>
          <div className="py-1">
            
             <Menu.Item>
              {({ active }) => (
                <span
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm cursor-pointer w-full'
                  )}
                >
                 Available Balance {" : "}
                 <NumberFormat value={account?.cash} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                </span>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <span
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm cursor-pointer'
                  )}
                >
                  Account
                </span>
              )}
            </Menu.Item>

             <Menu.Item>
              {({ active }) => (
                <span
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm cursor-pointer w-full'
                  )}
                >
                Help
                </span>
              )}
            </Menu.Item>

            {user && (
            <Menu.Item  onClick={() =>{
            auth.signOut();
            history.push("/")}}>
              {({ active }) => (
                <span
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm cursor-pointer'
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
