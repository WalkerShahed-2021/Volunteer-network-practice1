import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, signOut , onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import initaializeAuthentication from "../firebase/firebase.init";

initaializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleAuthProvider = new GoogleAuthProvider();

  const  singInUsingGoogle = () =>{
      return signInWithPopup(auth, googleAuthProvider);
    };

    const LogOut = () =>{
        signOut(auth)
        .then(() =>{
            setUser({})
        })
    }

    
    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user){
             setUser(user);
            }
          });
    },[])


    return {
        singInUsingGoogle,
        LogOut,
        user,
        error,
    }
    
}

export default useFirebase;