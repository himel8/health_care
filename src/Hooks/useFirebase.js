import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile, GithubAuthProvider     } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.initialize';

// firebase initialize 
initializeAuthentication();

const useFirebase = () =>{
    // all states 
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // all auth & providers
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // sign in with google
    const signInUsingGoogle = e => {
        e.preventDefault();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setUser(result.user);
            setError('');
        }).catch((error) => {
            setError(error.message);
        });
    };

    // sign in with github
    const signInUsingGithub = e => {
        e.preventDefault();
        signInWithPopup(auth, githubProvider)
        .then((result) => {
            setUser(result.user);
            setError('');
        }).catch((error) => {
            setError(error.message);
        });
    };

    // catch all input data
    const emailChange = e =>{
        setEmail(e.target.value)
    };
    const nameChange = e =>{
        setName(e.target.value);
    };
    const passwordChange = e =>{
        setPassword(e.target.value)
    };

    // handle registration
    const handleRegister = e =>{
        e.preventDefault();
        if(password.length < 6){
            setError('Password should be at least 6 characters')
            return;
        };
        // sing in with email / password
        createUserWithEmailAndPassword (auth, email, password)
        .then(result => { 
            setUser(result.user);
            setUserName();
            setError(''); 
          })
          .catch((error) => {
            setError(error.message);
          });        
    };

    // get user name 
    const setUserName = () =>{
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(result => {

          }).catch((error) => {
            setError(error.message);
          });
    };

    // handle login
    const handleSignIn = e =>{
        e.preventDefault();
        // login with email/password
        signInWithEmailAndPassword (auth, email, password)
        .then(result => { 
            setUser(result.user);
            setError('');
          })
          .catch((error) => {
            setError(error.message);
          });
    };


    // logOut 
    const logOut = () =>{
        signOut(auth).then(() => {
            setUser({})
          })
    };

    // authentication obsever
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
    } ,[]);

    // return all necessary item
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
};

export default useFirebase