import app from './firebase.init';
import logo from './logo.svg';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import './App.css'
import { useState } from 'react';

const auth = getAuth(app);



function App() {
  const [user, setUser] = useState({});
  // const {displayName, email, photoUrl} = user;
  const provider = new GoogleAuthProvider();
  // Google auth provider end 
  const handleSignOut = () => {
    console.log('clicked')
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch(error => [
        setUser({})
      ])
  }

  const handleGoogleSign = () => {
    console.log('clicked')
    signInWithPopup(auth, provider)
      .then(resut => {
        const user = resut.user;
        setUser(user)
      })
      .catch(error => {
        console.log(error, 'error khaisi')
      })
  }


  return (
    <div className="App">
      <header className="App-header">
        {
          user.email ? <button onClick={handleSignOut}>Sign Out</button>
            :
            <button onClick={handleGoogleSign}>Google Sign in</button>
        }
        <h2> I know this is my brother :{user.displayName}</h2>
        <br />
        <h3>Here is here email: {user.email}</h3>
        <br />
        <img src={user.photoUrl} alt="" />
      </header>
    </div>
  );
}

export default App;
