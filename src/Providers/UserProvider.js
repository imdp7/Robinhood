import React,{useState,useEffect ,createContext} from 'react'
import { auth } from "../firebase";

export const UserContext = createContext({ user: null });

function UserProvider(props) {
    const [user, setUser] = useState('null');

    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            setUser({user:userAuth});
        })
    }, [])


    return (
        <UserContext.Provider value={user}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserProvider
