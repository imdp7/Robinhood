import React, {useState,useContext} from "react";
import { Link, useHistory,Redirect } from "react-router-dom";
import {auth,signInWithGoogle} from '../firebase'
import { ToastContainer, toast } from 'react-toastify';
import { UserContext } from "../Providers/UserContext";

const SignIn = () => {
    const { user } = useContext(UserContext); 
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;

          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };

      const signInWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((response) => {
          history.push("/")
        })
        .catch(error => {
          setError("Error signing in with password and email!");
          toast.error("Error signing in with password and email", error);
        });
      };


  return (
    <div>
    {!!user ? (
      <Redirect to={{ pathname: "/" }} />

    ):(
    <div class="flex flex-col overflow-hidden">
      <div>
      <h1 class="text-3xl mb-2 text-center font-medium font-mono mb-3 text-white">Login to Robinhood</h1>
      <div class="border border-white-400 border-opacity-50 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
        {/* {error !== null && <div class = "py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>} */}
      <ToastContainer/>
        <form class="">
          <label htmlFor="userEmail" class="block text-white m-3">
            Email:
          </label>
          <input
            type="email"
            class="px-3 py-3 text-black placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded-2xl text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
            name="userEmail"
            value = {email}
            placeholder="E.g: dash123@gmail.com"
            id="userEmail"
            onChange = {(event) => onChangeHandler(event)}
          />
          
          <label htmlFor="userPassword" class="block text-white m-3">
            Password:
          </label>
          <input
            type="password"
            class="px-3 py-3 text-black placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded-2xl text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10 mb-3"
            name="userPassword"
            value = {password}
            placeholder="Your Password"
            id="userPassword"
            onChange = {(event) => onChangeHandler(event)}
          />
          <Link to = "passwordReset" class="text-blue-500 m-3 hover:text-white hover:text-decoration-line">
            Forgot Password?
          </Link>
          <button class="bg-green-400 mt-3 hover:bg-green-500 w-full py-2 text-white rounded-2xl" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
            Sign in
          </button>
        </form>
        <p class="text-center my-3">or</p>
        <button onClick={signInWithGoogle}
          class="bg-red-500 hover:bg-red-600 w-full py-2 text-white rounded-2xl">
          Sign in with Google
        </button>
        <p class="text-center my-3">
          Don't have an account?{" "}
          <Link to="/account/register" class="text-blue-500 hover:text-red-600">
            Sign up here
          </Link>{" "}
        </p>
      </div>
      </div>
    </div>
)}
    </div>
  );
};
export default SignIn;
