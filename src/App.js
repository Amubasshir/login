import { useEffect, useState } from 'react';
import './App.css';
import fire from './fire';

function App()
{
  const [user, setUser] = useState(' ');
  const [email,setEmail] = useState(' ');
  const [password,setPassword] = useState(' ');
  const [emailError, setEmailError] = useState(' ');
  const [passwordError, setPasswordError] = useState(' ');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInput = () =>
  {
    setEmail('');
    setPassword('');
  }
  const clearErrors = () =>
  {
    setEmailError(' ');
    setPasswordError(' ');
}
  const handleLogin = () =>
  {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err =>
      {
        switch (error.code)
        {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(error.message);
            break;
          
        }
      });
    
  };

  const handleSignup = () =>
  {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err =>
      {
        switch (error.code)
        {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
       
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(error.message);
            break;
          
        }
      });
    
  }
  const handleLogout = () =>
  {
    fire.auth().signout();
  }

  const authListener = () =>
  {
    fire.auth().onAuthStateChanged(user =>
    {
      if (user)
      {
        clearInput();
        setUser(user);
      } else
      {
        setUser('');
      }
    })
  }

  useEffect(() =>
  {
    authListener();
  },[])
  return (
    <div className="App">
    
    </div>
  );
}

export default App;
