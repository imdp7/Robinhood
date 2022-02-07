import React, { useState,useEffect } from "react";
import { Link,useHistory,Redirect } from "react-router-dom";
import {generateUserDocument,auth,signInWithGoogle} from '../firebase'
import SplitPane from 'react-split-pane';
import { ToastContainer, toast } from 'react-toastify';

const SignUp = () => {
  const history = useHistory();

  const [user,setUser] = useState('')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = ` Create your login | Robinhood`;
  },[],6000);

  useEffect(() => {
    (async() =>{
        auth.onAuthStateChanged(async userAuth => {
            const user = await generateUserDocument(userAuth);
            setUser({ user });
          });
    })()
  }, [])

  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {FirstName,LastName});
    }
    catch(error){
      toast.error("Error signing up with email and password", error);
    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    history.push('/account/login');
  };

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "FirstName") {
      setFirstName(value);
    } else if (name === "LastName") {
      setLastName(value);
    }
  };

  return (
    <div>
      {!!user ? (
      <Redirect to={{ pathname: "/account/register" }} />

    ):(
    <SplitPane split="vertical" className="">
      <div className='flex flex-wrap bg-white overflow-y-hidden'>
      <div className='w-auto md:w-auto'>
          <img className='object-contain h-auto' src='https://cdn.robinhood.com/assets/generated_assets/1e23d6b90f0d905b425ea289de345ab1.jpg' />

      </div>
      <div className="flex flex-col justify-start md:align-center max-w-screen-2xl">
      <div className="flex px-12 py-12 sm:py-none justify-center ">
      <div>
      <p className="lg:text-2xl md:text-base sm:text-sm text-center font-medium font-mono text-black">Sign Up</p>
      <div className="py-8 px-4 md:px-8 w-full">
      <ToastContainer/>
        {/* {error !== null && (
          <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
            {error}
          </div>
        )} */}
        <form className="">
          <div className="flex flex-row items-center">
          <div className="ml-2 pl-2 w-full">
          <label htmlFor="FirstName" className="block text-black mb-4 font-medium">
            First Name:
          </label>
          <input
            type="text"
            className="px-3 py-3 text-black placeholder-blueGray-300 text-blueGray-600 border border-black rounded hover:border-green-500 relative bg-white text-sm shadow-lg w-full"
            name="FirstName"
            value={FirstName}
            placeholder="E.g: Dash"
            id="FirstName"
            onChange={event => onChangeHandler(event)}
          />
          </div>
          <div className="ml-2 pl-2 w-full">
          <label htmlFor="LastName" className="block text-black mt-4 mb-4 font-medium">
            Last Name:
          </label>
          <input
            type="text"
            className="px-3 py-3 text-black placeholder-blueGray-300 relative bg-white text-sm border border-black rounded shadow-lg hover:border-green-500 w-full pr-10 mb-4"
            name="LastName"
            value={LastName}
            placeholder="E.g: Patel"
            id="LastName"
            onChange={event => onChangeHandler(event)}
          />
          </div>
          </div>
          <div className="ml-2 pl-2 w-full">
          <label htmlFor="userEmail" className="block text-black mb-4 font-medium">
            Email:
          </label>
          <input
            type="email"
            className="px-3 py-3 text-black placeholder-blueGray-300 relative bg-white text-sm border border-black rounded shadow-lg hover:border-green-500 w-full pr-10 mb-4"
            name="userEmail"
            value={email}
            placeholder="E.g: dash123@gmail.com"
            id="userEmail"
            onChange={event => onChangeHandler(event)}
          />
          </div>
          <div className="ml-2 pl-2 w-full">
          <label htmlFor="userPassword" className="block text-black mb-4 font-medium">
            Password:
          </label>
          <input
            type="password"
            className="px-3 py-3 text-black placeholder-blueGray-300 relative bg-white text-sm border border-black rounded shadow-lg hover:border-green-500 w-full pr-10 mb-4"
            name="userPassword"
            value={password}
            placeholder="Password (min. 10 characters)"
            id="userPassword"
            onChange={event => onChangeHandler(event)}
          />
          </div>
          <div className="ml-2 pl-2 w-full">
          <button
            className="bg-green-500 mt-3 hover:bg-green-600 w-full py-4 text-white rounded shadow-xl"
            onClick={event => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign up
          </button>
          </div>
        </form>
        <p className="ml-2 pl-2 text-center text-black md:text-base my-3">or</p>
        <div className="ml-2 pl-2 w-full">
        <button
        onClick={signInWithGoogle}
        className="bg-red-600 hover:bg-red-500 w-full py-4 font-base text-white rounded shadow-xl"
        >
          Sign In with Google
        </button>
        </div>
        <div className="ml-2 pl-2 w-full">
        <p className="text-center sm:text-sm md:text-base text-black my-3">
          Already have an account?{" "}
          <Link to="/account/login" className="text-blue-500 hover:text-black md:text-base font-medium">
            Sign in here
          </Link>
        </p>
        </div>
      </div>
    </div>
      </div>
      </div>
      </div>
    </SplitPane>
    )}
    </div>
  );
};
export default SignUp;