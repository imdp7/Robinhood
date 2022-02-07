import React, {useState,useEffect,useContext} from "react";
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
          toast.error("Error signing in with email and password", error);
        });
      };
      useEffect(() => {
        document.title = ` Sign In | Robinhood`;
      },[],6000);

  return (
    <div>
    {!!user ? (
      <Redirect to={{ pathname: "/" }} />

    ):(
    <div className="flex flex-row px-12 py-12 sm:py-none justify-center">
      <div>
      <p className="lg:text-2xl md:text-base sm:text-sm text-center font-medium font-mono text-black">Login to Robinhood</p>
      <div className="py-8 px-4 md:px-8 w-full">
        {/* {error !== null && <div className = "py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>} */}
      <ToastContainer/>
        <form className="">
          <label htmlFor="userEmail" className="block text-black mb-4 font-medium">
            Email:
          </label>
          <input
            type="email"
            className="px-3 py-3 text-black placeholder-blueGray-300 text-blueGray-600 border border-black rounded hover:border-green-500 relative bg-white text-sm shadow-lg w-full"
            name="userEmail"
            value = {email}
            placeholder="E.g: dash123@gmail.com"
            id="userEmail"
            onChange = {(event) => onChangeHandler(event)}
          />

          <label htmlFor="userPassword" className="block text-black mt-4 mb-4 font-medium">
            Password:
          </label>
          <input
            type="password"
            className="px-3 py-3 text-black placeholder-blueGray-300 relative bg-white text-sm border border-black rounded shadow-lg hover:border-green-500 w-full pr-10 mb-4"
            name="userPassword"
            value = {password}
            placeholder="Your Password"
            id="userPassword"
            onChange = {(event) => onChangeHandler(event)}
          />
          <Link to = "passwordReset">
            <p className="text-black mb-3 hover:text-green-600 underline underline-offset-8 hover:text-decoration-line md:text-base text-sm font-medium">Forgot Password?</p>
          </Link>
          <button className="bg-black mt-3 hover:bg-gray-800 w-full py-4 text-white rounded shadow-xl" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
            Sign in
          </button>
        </form>
        <p className="text-center text-black md:text-base my-3">or</p>
        <button onClick={signInWithGoogle}
          className="bg-red-600 hover:bg-red-500 w-full py-4 font-base text-white rounded shadow-xl">
          Sign in with Google
        </button>
        <p className="text-center sm:text-sm md:text-base text-black my-3">
          Don't have an account?{" "}
          <Link to="/account/register" className="text-blue-500 hover:text-black md:text-base font-medium">
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
