import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile, GithubAuthProvider     } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.initialize';


initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInUsingGoogle = e => {
        e.preventDefault();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setUser(result.user);
            setError('');
        }).catch((error) => {
            setError(error.message);
        });
    }
    const signInUsingGithub = e => {
        e.preventDefault();
        signInWithPopup(auth, githubProvider)
        .then((result) => {
            setUser(result.user);
            setError('');
        }).catch((error) => {
            setError(error.message);
        });
    }


    const emailChange = e =>{
        setEmail(e.target.value)
    }

    const nameChange = e =>{
        setName(e.target.value);
    }

    const passwordChange = e =>{
        setPassword(e.target.value)
    }

    const handleRegister = e =>{
        e.preventDefault();
        if(password.length < 6){
            setError('Password should be at least 6 characters')
            return;
        }
        createUserWithEmailAndPassword (auth, email, password)
        .then(result => { 
            setUser(result.user);
            setUserName();
            setError('');
          })
          .catch((error) => {
            setError(error.message);
          });
        
    }
    const setUserName = () =>{
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(result => {

          }).catch((error) => {
            setError(error.message);
          });
    }
    const handleSignIn = e =>{
        e.preventDefault();
        
        signInWithEmailAndPassword (auth, email, password)
        .then(result => { 
            setUser(result.user);
            setError('');
          })
          .catch((error) => {
            setError(error.message);
          });
    }

    const logOut = () =>{
        signOut(auth).then(() => {
            setUser({})
          })
    }

    useEffect( () =>{
        const unsuscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            }
            else{
                setUser({})
            }
          });
          return () => unsuscribed;
    } ,[])

    return {
        user,
        error,
        nameChange,
        signInUsingGoogle,
        signInUsingGithub,
        handleSignIn,
        handleRegister,
        emailChange,
        passwordChange,
        logOut
    }
}

export default useFirebase