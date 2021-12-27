import React, { useState,useEffect } from "react";
import { Link,useHistory } from "react-router-dom";
import {generateUserDocument,auth,signInWithGoogle} from '../firebase'

const SignUp = () => {
  const history = useHistory();

  const [user,setUser] = useState('')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = ` Sign Up | Robinhood`;
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
      setError('Error Signing up with email and password');
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
      <h1 className="text-3xl mb-2 text-center font-medium font-mono">Sign Up</h1>
      <div className="border border-white-400 border-opacity-50  mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
        {error !== null && (
          <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
            {error}
          </div>
        )}
        <form className="">
          <label htmlFor="FirstName" className="block block text-white m-3">
            First Name:
          </label>
          <input
            type="text"
            class="px-3 py-3 text-black placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded-2xl text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
            name="FirstName"
            value={FirstName}
            placeholder="E.g: Dash"
            id="FirstName"
            onChange={event => onChangeHandler(event)}
          />
          <label htmlFor="LastName" className="block block text-white m-3">
            Last Name:
          </label>
          <input
            type="text"
            class="px-3 py-3 text-black placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded-2xl text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
            name="LastName"
            value={LastName}
            placeholder="E.g: Test"
            id="LastName"
            onChange={event => onChangeHandler(event)}
          />
          <label htmlFor="userEmail" className="block block text-white m-3">
            Email:
          </label>
          <input
            type="email"
            class="px-3 py-3 text-black placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded-2xl text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
            name="userEmail"
            value={email}
            placeholder="E.g: faruq123@gmail.com"
            id="userEmail"
            onChange={event => onChangeHandler(event)}
          />
          <label htmlFor="userPassword" className="block block text-white m-3">
            Password:
          </label>
          <input
            type="password"
            class="px-3 py-3 text-black placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded-2xl text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10 mb-3"
            name="userPassword"
            value={password}
            placeholder="Your Password"
            id="userPassword"
            onChange={event => onChangeHandler(event)}
          />
          <button
            className="bg-green-400 hover:bg-green-500 w-full py-2 text-white mt-3 rounded-2xl"
            onClick={event => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign up
          </button>
        </form>
        <p className="text-center my-3">or</p>
        <button
        onClick={signInWithGoogle}
          className="bg-red-500 hover:bg-red-600 w-full py-2 text-white rounded-2xl"
        >
          Sign In with Google
        </button>
        <p className="text-center my-3">
          Already have an account?{" "}
          <Link to="/account/login" className="text-blue-500 hover:text-white">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignUp;