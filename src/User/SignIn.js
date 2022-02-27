import React, {useState,useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import {auth,db,provider} from '../firebase'
import { ToastContainer, toast } from 'react-toastify';
import SplitPane from 'react-split-pane';

const SignIn = () => {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;

          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };

      const signInWithGoogle = async () => {
        try {
          const res = await auth.signInWithPopup(provider);
          const user = res.user;
          const query = await db
            .collection("users")
            .where("uid", "==", user.uid)
            .get();
          if (query.docs.length === 0) {
            await db.collection("users").add({
              uid: user.uid,
              name: user.displayName,
              authProvider: "google",
              email: user.email,
            });
            history.push("/");
          }
        } catch (err) {
          console.error(err);
          alert(err.message);
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
      <SplitPane split="vertical" className="">
      <div className='flex flex-wrap bg-white overflow-y-hidden'>
      <div className='w-auto md:w-auto'>
          <img className='object-contain h-auto' alt="signin-user" src='https://cdn.robinhood.com/assets/generated_assets/1e23d6b90f0d905b425ea289de345ab1.jpg' />

      </div>
      <div className="flex flex-col justify-start md:align-center max-w-screen-2xl"></div>
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
          <Link to="/resetPassword">
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
          <Link to="/register" className="text-blue-500 hover:text-black md:text-base font-medium">
            Sign up here
          </Link>{" "}
        </p>
      </div>
      </div>
    </div>
    </div>
</SplitPane>
    </div>
  );
};
export default SignIn;
